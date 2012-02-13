$(document).ready(function(){
    
    
    


$.getJSON("https://api.github.com/users/drecodeam/gists", function(response) {
                $.each(response, function(j){
		
		var gist_desc=response[j].description;
		console.log('description' + gist_desc);
		var text='<li class="col_6"><div class="gist">' + gist_desc + '</div>' ;
		var filename={};
		$.getJSON('https://api.github.com/gists/' + response[j].id, function(response) {
		    $.each(response.files, function(i,item){
			filename[i]=item.filename;
			console.log('filename' + filename);
			text=text.concat('<div class="filename">' + item.filename + '</div><code class="prettyprint lang-css desc">' + item.content + '</code>' );
			});
		    $('#content').append(text + '</li>');
		    prettyPrint();
                     $("#content li").click(function(){
                var state=$(this).css('max-height');
                console.log(state);
                if(state=='400px'){
                $(this).css({'max-height':'none'});    
                };
                if(state=='none'){
                $(this).css({'max-height':'400px'});    
                };
                
                

}); 
		    

			});
		});
 });


  
    
    });
