<?php

namespace App\Controller;

use App\Entity\Customer;
use App\Entity\Reservation;
use App\Form\CustomerFormType;
use App\Form\ReservationFormType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class FrontController extends AbstractController
{
    #[Route('/', name: 'home')]
    public function index(): Response
    {
        $reservation = new Reservation;
        $reservationForm = $this -> createForm(ReservationFormType::class, $reservation);

        return $this->render('front/index.html.twig', [
            'controller_name' => 'FrontController',
            'reservation_form'=> $reservationForm->createView(),
        ]);
    }
}
