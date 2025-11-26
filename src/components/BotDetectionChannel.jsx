import React from 'react';
import Message from './Message';
import ChannelHero from './ChannelHero';
import DiscordEmbed from './DiscordEmbed';
import FileAttachment from './FileAttachment';
import MessageInput from './MessageInput';
import DateDivider from './DateDivider';

import kevinAvatar from '../assets/kevin_pfp.jpg';
import featureGraph from '../assets/projects/botdetection/featureImportance.png';
import confusionMatrix from '../assets/projects/botdetection/xgboost.png';
import presentation from '../assets/projects/botdetection/conferencePresentation.png'
import conferencePaper from '../assets/projects/botdetection/A6_Tweet_Bot_Detection.pdf'

const BotDetectionChannel = () => {
  return (
    <div className="flex flex-col h-full bg-d-background-primary">

      <div className="flex-1 overflow-y-auto overflow-x-hidden pb-4 pt-4 custom-scrollbar">
      
      {/* 1. Hero - Research / Python Theme */}
      <ChannelHero channelName="bot-detection"/>
      
      <DateDivider date="September 2, 2025" />

      {/* 2. Intro Message: The Research Goal */}
      <Message 
         avatar={kevinAvatar} 
         username="Kevin" 
         roleColor="#faa61a" 
         timestamp="02/09/2025 3:00 PM"
      >
         <p className="font-bold text-lg text-white mb-2">Project Brief: Twitter Bot Detection 🤖</p>
         <p className="text-d-text-normal mb-2">
           Social media is plagued by automated bots spreading misinformation and scams.
           My team and I conducted research to build a <b>Machine Learning Classifier</b> capable of distinguishing between Human and Bot tweets with high precision.
         </p>
         <p className="text-d-text-normal">
            We scraped, cleaned, and analyzed over <b>16,000 tweets</b> from Jan-Sept 2024 to train our models.
         </p>
      </Message>

      {/* 3. Methodology Embed */}
      <Message 
         avatar={kevinAvatar} 
         username="Kevin" 
         roleColor="#faa61a" 
         timestamp="02/09/2025 3:05 PM"
      >
         {/* Red Color for "Security/Alert" vibe */}
         <DiscordEmbed title="🔬 Methodology & Tech Stack" color="#F04747">
            <div className="grid grid-cols-2 gap-4">
               <div>
                  <p className="text-xs font-bold text-d-text-muted uppercase">Data Collection</p>
                  <p className="text-white">TweetHarvest (Scraping)</p>
               </div>
               <div>
                  <p className="text-xs font-bold text-d-text-muted uppercase">Preprocessing</p>
                  <p className="text-white">Pandas & Manual Labeling</p>
               </div>
               <div>
                  <p className="text-xs font-bold text-d-text-muted uppercase">Models Trained</p>
                  <p className="text-white">Random Forest, XGBoost, KNN, SVM</p>
               </div>
               <div>
                  <p className="text-xs font-bold text-d-text-muted uppercase">Best Accuracy</p>
                  <p className="text-white">94.77% (XGBoost)</p>
               </div>
            </div>
         </DiscordEmbed>
      </Message>

      {/* 4. Deep Dive: Feature Engineering (The "Aha!" Moment) */}
      <Message 
         avatar={kevinAvatar} 
         username="Kevin" 
         roleColor="#faa61a" 
         timestamp="02/09/2025 3:15 PM"
      >
         <p className="mb-2 text-d-text-normal">
            One of our key findings was identifying <em>which</em> features actually expose a bot.
            Using <strong>Mean Decrease in Impurity (MDI)</strong>, we discovered that <code className="bg-black/30 p-1 rounded text-red-400">text_has_link</code> was the single most important predictor.
         </p>
         
         <div className="bg-d-background-secondary p-4 rounded border-l-4 border-red-500 my-2">
             <p className="text-xs font-bold text-red-400 uppercase mb-1">📊 Insight</p>
             <p className="text-sm text-d-text-normal">
               Bots are programmed to redirect traffic. Our analysis showed a massive correlation between the presence of a URL in a tweet and it being bot-generated, far higher than hashtag usage or tweet length.
             </p>
         </div>

         {/* Image from Page 14 of PDF */}
         <div className="mt-4">
             <p className="text-xs font-bold text-d-text-muted mb-1">FEATURE IMPORTANCE GRAPH (RANDOM FOREST)</p>
             <img src={featureGraph} alt="Feature Importance Graph" className="rounded-lg w-full max-w-lg border border-d-background-tertiary" />
         </div>
      </Message>

      {/* 5. Results & Validation */}
      <Message 
         avatar={kevinAvatar} 
         username="Kevin" 
         roleColor="#faa61a" 
         timestamp="02/09/2025 3:20 PM"
      >
         <p className="mb-2 text-d-text-normal">
            We achieved our best performance using <b>XGBoost</b> with an accuracy of <b>94.77%</b>. 
            Below is the Confusion Matrix showing how well the model minimized False Positives.
         </p>
         <img 
            src={confusionMatrix} 
            alt="Confusion Matrix" 
            className="rounded-lg w-full max-w-sm mt-2 border border-d-background-tertiary" 
         />
      </Message>

      {/* 6. Conference Photo (Social Proof) */}
      <Message 
         avatar={kevinAvatar} 
         username="Kevin" 
         roleColor="#faa61a" 
         timestamp="02/09/2025 3:28 PM"
      >
         <p className="mb-2 text-d-text-normal">
            It was an honor to see our work accepted! Here is a snapshot of the team presenting our findings on stage at the <strong>2025 ICISS Conference</strong>.
         </p>
         
         <img 
            src={presentation} 
            alt="ICISS Conference Presentation" 
            className="rounded-lg w-full max-w-md mt-2 border border-d-background-tertiary hover:opacity-90 transition-opacity cursor-pointer" 
         />
      </Message>

      {/* 7. Code / Future Work */}
      <Message 
         avatar={kevinAvatar} 
         username="Kevin" 
         roleColor="#faa61a" 
         timestamp="02/09/2025 3:25 PM"
      >
        <p className="mb-2 text-d-text-normal">
            If you are interested in the statistical analysis and feature engineering breakdown, you can read our <strong>published paper</strong> below:
         </p>
         {/* PDF Report Download */}
         <div className="my-4">
             <FileAttachment 
                fileName="Tweet_Bot_Detection.pdf"
                fileSize="378 kb"
                fileUrl={conferencePaper}
                type="pdf"
             />
         </div>
         <p className="text-d-text-normal">
            You can view the full source code and dataset on GitHub:
         </p>
         
         {/* GitHub Link Card */}
         <div className="mt-4">
            <a 
               href="https://github.com/AdrianBasukii/Fundamentals-of-Data-Science-Final-Project" 
               target="_blank"
               rel="noopener noreferrer"
               className="bg-d-background-secondary hover:bg-d-background-tertiary p-3 rounded flex items-center gap-3 w-fit transition-colors border border-black/20"
            >
               <div className="bg-white p-1 rounded-full text-black text-xl">
                  {/* Simple GitHub Icon SVG */}
                  <svg strokeWidth="0" viewBox="0 0 16 16" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
               </div>
               <div>
                   <p className="font-bold text-d-text-normal text-sm">Fundamentals-of-Data-Science-Final-Project</p>
                   <p className="text-xs text-d-text-muted">GitHub Repository</p>
               </div>
            </a>
         </div>
      </Message>

    </div>
     <MessageInput channelName={"bot-detection"}/>
    </div>
  );
};

export default BotDetectionChannel;