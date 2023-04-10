import { Box, Grid, HStack, Heading, Progress, Stack, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import cursor from "../../../assets/images/cursor.png";
import Sidebar from '../Sidebar';
import { RiArrowDownLine, RiArrowUpSLine } from 'react-icons/ri';
import  {DoughnutChart, LineChart}  from './Chart';
import { useDispatch, useSelector } from 'react-redux';
import { getDashboardStats } from '../../../redux/actions/admin';
import Loader from "../../Layout/Loader/Loader";
const DataBox = ({title,qty,qtyPercentage,profit})=>(
  <Box w={["full","20%"]} boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'} p={'8'} borderRadius={'lg'}>
    <Text>{title}</Text>
    <HStack spacing={'6'}>
      <Text fontSize={'2xl'} fontWeight={'bold'}>
      {qty}
      </Text>

      <HStack>
        <Text>{`${qtyPercentage} %`}</Text>
        {profit ? <RiArrowUpSLine color='green'/> : <RiArrowDownLine color='red' />}
      </HStack>
    </HStack>
    <Text opacity={'0.6'}>
      Since Last Month
    </Text>
  </Box>
)
const Bar = ({title,value,profit})=>(
  <Box py={'4'} px={['0',"20"]}>
    <Heading size={'sm'} mb='2'>{title}</Heading>
    <HStack w='full' alignItems={'center'}>
      <Text>{profit ? "0%" : `-${value}%`}</Text>
      <Progress width={'full'} value={profit? value: 0} colorScheme='purple' />
      <Text>{`${value>100 ? value : 100}%  `}</Text>
    </HStack>
  </Box>
)
const Dashboard = () => {
  const dispatch = useDispatch();
  const {
    loading,
    stats,
    viewsCount,
    subscriptionCount,
    usersCount,
    subscriptionPercentage,
    viewsPercentage,
    usersPercentage,
    subscriptionProfit,
    viewsProfit,
    usersProfit,
  } = useSelector(state => state.admin);
  useEffect(()=>{
    dispatch(getDashboardStats());
  },[dispatch])
  return (
    <Grid css={{cursor:`url(${cursor}), default`}} minH={'100vh'} templateColumns={['1fr','5fr 1fr']}>
        {
          loading || !stats?
          (<Loader/>):
          (
            <Box boxSize={'border-box'} py='16' px={['4','0']}>
            <Text textAlign={'center'} opacity={'0.5'}>{`Last change was on ${String(new Date(stats[11].createdAt)).split('G')[0]}`}</Text>
            <Heading ml={["0","16"]} mb={"16"} textAlign={["center","left"]} >Dashboard</Heading>
            <Stack direction={['column','row']} minH={'24'} justifyContent={'space-evenly'}>
              <DataBox title='Views' qty={viewsCount} qtyPercentage={viewsPercentage} profit={viewsProfit} />
              <DataBox title='Users' qty={usersCount} qtyPercentage={usersPercentage} profit={usersProfit} />
              <DataBox title='Subscription' qty={subscriptionCount} qtyPercentage={subscriptionPercentage} profit={subscriptionProfit} />
            </Stack>

            <Box m={["0","16"]} borderRadius={'lg'} padding={['0','16']} mt={['4','16']} boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'} > 
              <Heading textAlign={['center','left']} size={'md'} pt={['8','0']} ml={['0','16']}>
                Views Graph
              </Heading>
              {/* Line Graph Here */}
            <LineChart views={stats.map(item=>item.views)}  />
            </Box>

            <Grid templateColumns={["1fr","2fr 1fr"]}>
              <Box p='4'>
                <Heading textAlign={['center','left']} my={'8'} ml={['0','16']} size={'md'}>Progress Bar</Heading>

                <Box >
                  <Bar title="Views" value={viewsPercentage} profit={viewsProfit} />
                  <Bar title="Users" value={usersPercentage}  profit={usersProfit} />
                  <Bar title="Subscription" value={subscriptionPercentage} profit={subscriptionProfit} />
                </Box>
              </Box>

              <Box p={['0','16']} boxSizing='border-box' py='4'>
                <Heading textAlign={'center'} size={'md'} mb='4'>Users</Heading>
                  <DoughnutChart userData={[subscriptionCount,usersCount-subscriptionCount]} />
                {/* Graph */}
              </Box>
            </Grid>
        </Box>

          )
        }
        <Sidebar/>
    </Grid>
  )
}

export default Dashboard