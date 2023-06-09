class UniqueCode
  def initialize
    @nouns = %w[
      dog
      cat
      table
      chair
      book
      car
      tree
      computer
      flower
      sun
      house
      pen
      phone
      ball
      cup
      shoe
      clock
      moon
      river
      mountain
      cloud
      door
      window
      hat
      bottle
      river
      city
      place
      frog
      lion
      tiger
      zebra
      mouse
      toy
      bulb
      fan
      tire
      cloth
      bat
      bottle
    ]

    @adjectives = %w[
      happy
      sad
      big
      small
      beautiful
      ugly
      clever
      foolish
      brave
      scared
      strong
      weak
      fast
      slow
      loud
      quiet
      bright
      dark
      sweet
      sour
      funny
      serious
      tall
      short
      friendly
      cute
    ]
  end

  def generate(length = 1)
    @unique_code = ''
    length.times do
      @unique_code += "#{@adjectives.sample}-#{@nouns.sample}-#{rand(11..99)}"
    end
    @unique_code
  end
end
