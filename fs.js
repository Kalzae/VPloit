var io = java.io,
File = io.File,
FileReader = io.FileReader,
FileWriter = io.FileWriter,
BufferedReader = io.BufferedReader,
BufferedWriter = io.BufferedWriter
var fs = {
   	exists: function(directory) {
   	var namee = directory.split('/')
var dire = Dir + directory.replace(namee[namee.length -1], '')
   	if(!new File(dire, namee[namee.length -1]).exists()) {
return false
   }else{ 
return true
   }
   },
writeFile: function(directory, content) {
	var namee = directory.split('/')
var dire = Dir + directory.replace(namee[namee.length -1], '')
   	if(!new File(dire).exists()) {
   	new File(dire).mkdir()
   return 'No Directory Found'
   }
	if(new File(dire, namee[namee.length -1]).exists()) {
   	 var file = new FileWriter(new File(dire, namee[namee.length -1]))
        file.write(content)
        file.close()
        }else{
        	var file = new FileWriter(new File(dire, namee[namee.length -1]))
        new File(dire, namee[namee.length -1]).createNewFile()
        file.write(content)
        file.close()
        }
   },
   readFile: function(directory) {
   	try{
var namee = directory.split('/')
var dire = Dir + directory.replace(namee[namee.length -1], '')
   var fcont = ''
   var res = ''
   	var file = new BufferedReader(new FileReader(new File(dire, namee[namee.length -1])))
       while((fcont = file.readLine()) != null ) { 
if(fcont != '') {
res = res + fcont + '\n'
}else{
	res = res + fcont
	}} 
        return res
        
        }catch(err){
        	clientMessage(err.toString())
        }
   },
   appendFile: function(directory, content) {
   	try{
   	var namee = directory.split('/')
var dire = Dir + directory.replace(namee[namee.length -1], '')
 if(!fs.exists(dire)) {
   	new File(dire).mkdir()
   return 'No Directory Found'
   }
   if(!fs.exists(dire)) {
   	new File(dire, namee[namee.length -1]).createNewFile()
   }
   var prev = fs.readFile(directory + namee[namee.length -1])
   	var file = new BufferedWriter(new FileWriter(new File(dire, namee[namee.length -1])))
   var bleh = prev + content
   var cont = bleh.replace('\n' + content, content)
        file.write(cont)
        file.close()
        }catch(err){
        	clientMessage(err.toString())
        }
   },
   delete: function(directory) {
   	var namee = directory.split('/')
var dire = Dir + directory.replace(namee[namee.length -1], '')
   	var file = new File(dire, namee[namee.length -1])
        file.delete()
   }
   }
