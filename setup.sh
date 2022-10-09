echo "Enter your message"

read message 

echo $message > ./config/message.txt

clear

echo You entered\: $message 

echo "Do you want to count-up(0) or count-down(1)(default) to your input time?"

read direction

echo $direction > ./config/config.txt
