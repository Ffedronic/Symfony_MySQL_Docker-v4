<?php

namespace App\Entity;

use App\Repository\ReservationRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: ReservationRepository::class)]
class Reservation
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'reservations')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Customer $Customer = null;

    #[ORM\ManyToOne(inversedBy: 'reservations')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Restaurant $Restaurant = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    #[Assert\Range(min:'today')]
    private ?\DateTimeInterface $Date = null;

    #[ORM\Column(type: Types::TIME_MUTABLE)]
    private ?\DateTimeInterface $Time = null;

    #[ORM\Column]
    #[Assert\LessThanOrEqual(10)]
    private ?int $Guests = null;

    #[ORM\Column]
    private ?bool $Booking = null;

    #[ORM\Column]
    private ?bool $Booked = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCustomerId(): ?Customer
    {
        return $this->Customer;
    }

    public function setCustomerId(?Customer $Customer): static
    {
        $this->Customer = $Customer;

        return $this;
    }

    public function getRestaurantId(): ?Restaurant
    {
        return $this->Restaurant;
    }

    public function setRestaurantId(?Restaurant $Restaurant): static
    {
        $this->Restaurant = $Restaurant;

        return $this;
    }

    public function getDate(): ?\DateTimeInterface
    {
        return $this->Date;
    }

    public function setDate(\DateTimeInterface $Date): static
    {
        $this->Date = $Date;

        return $this;
    }

    public function getTime(): ?\DateTimeInterface
    {
        return $this->Time;
    }

    public function setTime(\DateTimeInterface $Time): static
    {
        $this->Time = $Time;

        return $this;
    }

    public function getGuests(): ?int
    {
        return $this->Guests;
    }

    public function setGuests(int $Guests): static
    {
        $this->Guests = $Guests;

        return $this;
    }

    public function isBooking(): ?bool
    {
        return $this->Booking;
    }

    public function setBooking(bool $Booking): static
    {
        $this->Booking = $Booking;

        return $this;
    }

    public function isBooked(): ?bool
    {
        return $this->Booked;
    }

    public function setBooked(bool $Booked): static
    {
        $this->Booked = $Booked;

        return $this;
    }
}
