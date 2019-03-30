package nordgym.web.controllers;

import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class GalleryController extends BaseController{
    @GetMapping("/gallery")
    public ModelAndView gallery (ModelAndView modelAndView, Authentication authentication){
        if(authentication.isAuthenticated()){
            modelAndView.addObject("username",authentication.getName());
        }
        return this.view("gallery",modelAndView);
    }
}
