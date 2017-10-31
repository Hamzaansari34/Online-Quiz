
import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { QuizComponent } from '../quiz/quiz.component';
import { QuizdetailComponent } from '../quizdetail/quizdetail.component';

export const routes: Routes = [
    { path: 'home',  component: HomeComponent },
    { path: 'quiz',     component: QuizComponent },
    { path: 'quizdetail',     component: QuizdetailComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
  ];