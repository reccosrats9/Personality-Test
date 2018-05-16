import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Home.css'

export default function (){
    return(
        <div className='main'>
        <p>
            Although each of us has a different personality, we also share many commonalities. The True Color personality test identifies and labels personality style by color. This model is based on  years
            of work by researchers and psychologists. It primarily draws on the works of Isabel Briggs-Myers, Katherine Briggs, and David Keirsey. Don Lowry developed this system, which uses four primary colors to
            designate personality types and behavioral styles.
        </p>
        <p>
            Lowry’s objective was the application of temperament or personality style to facilitate
            deeper communications and understanding. He hoped it would result in positive self-worth
            and self-esteem. The True Colors program was designed to maximize the
            application of psychological style in the workplace, in the family,  in education, and in
            other types of communities. The ease of understanding and use in all human
            relationships and interactions make this model very functional.
            The intent is to decrease conflict via increased understanding of ourselves and others. Once you learn your color and the colors of those in your social circle, you will have a better
            understanding of why they behave the way they do
        </p>
        <p>
            Each color is associated with certain personality traits or behaviors. Everyone has some
            degree of each color, but one color is predominant. The following quiz will identify your
            color spectrum. Follow the directions carefully. If you have two colors with the same score, you
            pick which one you think more accurately describes you. 
        </p>
        <Link to='/Q1'>
        <button className= 'btn'>Start quiz</button>
        </Link>
    </div>
    )
}