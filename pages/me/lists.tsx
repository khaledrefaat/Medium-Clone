import Head from 'next/head';
import React from 'react';
import ListItem from '../../components/lists/ListItem';
import Button from '../../components/Ui/Button';
import DividerButton from '../../components/Ui/DividerButton';
import SectionDivider from '../../components/Ui/SectionDivider';
import SectionHeading from '../../components/Ui/SectionHeading';

const lists = () => {
  return (
    <>
      <Head>
        <title>Your Lists</title>
        <meta name="description" content="Medium Blog" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <section>
        <div className="container  mt-24 lg:mt-12 mb-5 ml-3 sm:ml-auto">
          <div className="flex w-full justify-between">
            <SectionHeading>Your lists</SectionHeading>
            <Button className="bg-green-600">New list</Button>
          </div>
          <SectionDivider>
            <DividerButton active className="mr-10">
              saved
            </DividerButton>
            <DividerButton>Highlights</DividerButton>
          </SectionDivider>

          <div className="mt-16">
            <ListItem title="Reading list" />
            <ListItem title="Saved for later" />
          </div>
        </div>
      </section>
    </>
  );
};

export default lists;
