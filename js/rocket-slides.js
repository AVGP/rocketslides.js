var RocketSlides = function(container) {
    var self = {
        currentStep: 0,
        container: container
    };
    
    var init = function() {
        self.steps = document.querySelectorAll('.step');
        for(var i=0; i < self.steps.length; i++) {
            self.steps[i].style.top = self.steps[i].getAttribute('data-y') + 'px';
        }
        scrollToStep(0);
        
        document.getElementsByTagName('body')[0].addEventListener('keyup', function(e) {
            console.log(e.keyCode);
            if(e.keyCode == 39 || e.keyCode == 38) {
                self.currentStep++;
                scrollToStep(self.currentStep);
            }
            else if(e.keyCode == 37 || e.keyCode == 40) {
                self.currentStep--;
                scrollToStep(self.currentStep);
            }
        });
    };
            
    var scrollToStep = function(step) {
        if(self.currentStep > 0) {
            var prevSlide = document.querySelector('[data-step="' + (self.currentStep-1) + '"]');
            prevSlide.className = "step";
            console.log("Removed active from " + self.currentStep);
        }
        
        self.currentStep = step;
        var slide = document.querySelector('[data-step="' + step + '"]');
        slide.className += ' active';
                
        container.style.top = '-' + slide.getAttribute('data-y') + 'px';
        document.getElementById('indicator').style.top = (90 - (step * (100/self.steps.length)) + '%');
    }
            
    init();
    return self;    
};