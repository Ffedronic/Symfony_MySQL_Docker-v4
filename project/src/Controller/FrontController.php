<?php

namespace App\Controller;

use App\Entity\Customer;
use App\Entity\Reservation;
use App\Form\ReservationFormType;
use DateTime;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\ObjectManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class FrontController extends AbstractController
{
    #[Route('/', name: 'home')]
    public function index(): Response
    {
        // $customer = $manager->getRepository(Customer::class)->find(1);
        // // $date = new DateTime('now');
        // dump($customer);
      
        return $this->render('front/index.html.twig', [
            'controller_name' => 'FrontController',
        ]);
    }
}
