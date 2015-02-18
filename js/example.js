/*global Validation, Validator, PIE, jQuery */
(function(namespace, $){
    var main = {
        init : function(){
            this.Validation();
            this.Pie();
        },

        Validation:function(){
            var lang = $('body');
            var form = new Validator('#form-contact');
            form.validate({
                '.required':{
                    rules: {
                        required: true
                    }
                },

                '.email':{
                        rules: {
                            email: true
                        }
                 }
            });


            //Metodo de erro
            form.bind('error', function(errorlist){
                //console.log('erros', errorlist);

                $('input.error').removeClass('error');
                $('textarea.error').removeClass('error');

                var tmpError    = $('<span class="error_message"></span>');
                var errorMarkup = $('#form-contact');

                // errorMarkup.addClass('error-margin-bottom');
                // if(lang.hasClass('br')){
                //     errorMarkup.append(tmpError);
                //     $('.error_message').html('Desculpe. Ocorreu um erro no envio de sua mensagem.');
                //     $('.error_message').hide().fadeIn();
                // }

                // if(lang.hasClass('en')){
                //     errorMarkup.append(tmpError);
                //     $('.error_message').html('Sorry. An error occurred when sending your message.');
                //     $('.error_message').hide().fadeIn();
                // }

                // if(lang.hasClass('es')){
                //     errorMarkup.append(tmpError);
                //     $('.error_message').html('Lo siento. Se produjo un error en el envío de su mensaje.');
                //     $('.error_message').hide().fadeIn();
                // }

                $(errorlist).each(function(){
                    $(this.element).addClass('error');
                });
            });

            //Metodo de Sucesso
            form.bind('success',function(){
                $('input.error').removeClass('error');
                $('textarea.error').removeClass('error');
                $('.error_message').fadeOut().remove();
                //$('#form-contact .select').removeClass('error-margin-bottom');

                var form   = $("#form-contact");
                var param  = form.serialize();
                //var target = form.parent().append('<div class="feedback-form rounded"><span class="feedback_message loading"></span><a href="#" class="bt-remove-feedback-form rounded" title="OK">OK</a></div>');

                // //loading
                // if(lang.hasClass('br')){
                //     target.find('.feedback_message').text('Enviando...');
                // }
                //
                // if(lang.hasClass('en')){
                //     target.find('.feedback_message').text('Sending...');
                // }
                //
                // if(lang.hasClass('es')){
                //     target.find('.feedback_message').text('Enviando...');
                // }

                 $.post(form.attr("action"), param);
                return true;

                //envio do form
                // $.post(form.attr("action"), param, function(){
                //     var tmpSuccess = $('<span class="feedback_message"></span>');
                //     var form = $('#form-contact');
                //
                //     window.location = window.location+"#success";
                //
                //     // if(lang.hasClass('br')){
                //     //     form.parent().find('.feedback_message').removeClass('loading').html('Obrigado! Sua mensagem <br> foi enviada com sucesso.');
                //     //     $('.success_message').hide().fadeIn();
                //     // }
                //     //
                //     // if(lang.hasClass('en')){
                //     //     form.parent().find('.feedback_message').removeClass('loading').html('Thank you! Your message <br> has been sent.');
                //     //     $('.success_message').hide().fadeIn();
                //     // }
                //     //
                //     // if(lang.hasClass('es')){
                //     //     form.parent().find('.feedback_message').removeClass('loading').html('¡Gracias! Su mensaje <br> ha sido enviado.');
                //     //     $('.success_message').hide().fadeIn();
                //     // }
                //
                //     form[0].reset();
                //
                // });
                //
                // return false;
            });
        },

        Pie:function(){
            if (window.PIE) {
                $('.info, .rounded, .submit, .location').each(function() {
                    PIE.attach(this);
                });
            }
        }

    };

    $(document).ready(function(){
        main.init();
    });
})(window.application, jQuery);
