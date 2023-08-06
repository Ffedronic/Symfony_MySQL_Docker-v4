<?php

namespace App\Entity;

use App\Repository\RestaurantRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: RestaurantRepository::class)]
class Restaurant
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Assert\Unique()]
    private ?string $Name = null;

    #[ORM\Column(length: 15)]
    #[Assert\Unique()]
    private ?string $Phone = null;

    #[ORM\Column(length: 255)]
    #[Assert\Unique()]
    private ?string $Email = null;

    #[ORM\Column(type: Types::TIME_MUTABLE)]
    private ?\DateTimeInterface $Opening_Hour = null;

    #[ORM\Column(type: Types::TIME_MUTABLE)]
    private ?\DateTimeInterface $Closure_Hour = null;

    #[ORM\Column(type: Types::TIME_MUTABLE)]
    private ?\DateTimeInterface $Interval_Time_Service = null;

    #[ORM\Column]
    private ?int $Max_Guests = null;
    
    #[ORM\Column]
    private ?int $Max_Guests_Per_Interval_Time_Service = null;

    #[ORM\OneToMany(mappedBy: 'Restaurant_Id', targetEntity: Reservation::class, orphanRemoval: true)]
    private Collection $reservations;

   

    public function __construct()
    {
        $this->reservations = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->Name;
    }

    public function setName(string $Name): static
    {
        $this->Name = $Name;

        return $this;
    }

    public function getPhone(): ?string
    {
        return $this->Phone;
    }

    public function setPhone(string $Phone): static
    {
        $this->Phone = $Phone;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->Email;
    }

    public function setEmail(string $Email): static
    {
        $this->Email = $Email;

        return $this;
    }

    public function getOpeningHour(): ?\DateTimeInterface
    {
        return $this->Opening_Hour;
    }

    public function setOpeningHour(\DateTimeInterface $Opening_Hour): static
    {
        $this->Opening_Hour = $Opening_Hour;

        return $this;
    }

    public function getClosureHour(): ?\DateTimeInterface
    {
        return $this->Closure_Hour;
    }

    public function setClosureHour(\DateTimeInterface $Closure_Hour): static
    {
        $this->Closure_Hour = $Closure_Hour;

        return $this;
    }

    public function getIntervalTimeService(): ?\DateTimeInterface
    {
        return $this->Interval_Time_Service;
    }

    public function setIntervalTimeService(\DateTimeInterface $Interval_Time_Service): static
    {
        $this->Interval_Time_Service = $Interval_Time_Service;

        return $this;
    }

    public function getMaxGuestsPerIntervalTimeService(): ?int
    {
        return $this->Max_Guests_Per_Interval_Time_Service;
    }

    public function setMaxGuestsPerIntervalTimeService(int $Max_Guests_Per_Interval_Time_Service): static
    {
        $this->Max_Guests_Per_Interval_Time_Service = $Max_Guests_Per_Interval_Time_Service;

        return $this;
    }

    /**
     * @return Collection<int, Reservation>
     */
    public function getReservations(): Collection
    {
        return $this->reservations;
    }

    public function addReservation(Reservation $reservation): static
    {
        if (!$this->reservations->contains($reservation)) {
            $this->reservations->add($reservation);
            $reservation->setRestaurantId($this);
        }

        return $this;
    }

    public function removeReservation(Reservation $reservation): static
    {
        if ($this->reservations->removeElement($reservation)) {
            // set the owning side to null (unless already changed)
            if ($reservation->getRestaurantId() === $this) {
                $reservation->setRestaurantId(null);
            }
        }

        return $this;
    }

    public function getMaxGuests(): ?int
    {
        return $this->Max_Guests;
    }

    public function setMaxGuests(int $Max_Guests): static
    {
        $this->Max_Guests = $Max_Guests;

        return $this;
    }
}
