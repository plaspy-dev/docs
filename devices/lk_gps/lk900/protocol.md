---
slug: /lk_gps/lk900/protocol
id: lk900-protocol
sidebar_label: Protocol
title: LK-GPS - LK900 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the LK GPS LK900 and how it communicates with Plaspy for reliable fleet and asset tracking
keywords:
 - LK GPS LK900 protocol
 - LK900 GPS tracker
 - LK GPS protocol Plaspy
 - LK900 communication protocol
 - LK900 tracking protocol
 - vehicle tracking LK900
 - fleet management LK900
 - LK900 compatibility Plaspy
 - GPS tracker protocol guide
 - asset tracking LK900
---

# LK-GPS - LK900 Protocol

This page describes the public protocol context for using the LK-GPS LK900 family of trackers with Plaspy. It focuses on how the device communicates at a high level, which connection points Plaspy exposes, and what to consider when integrating the LK900 A B or C variants for vehicle, equipment, or cargo tracking. The guidance here is intended for technical users, installers, and fleet managers who need a clear picture of device to platform communications without exposing private implementation details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. For Plaspy the server endpoint is d.plaspy.com and the server IP is 54.85.159.138 with port 8888. Devices may be configured to use UDP or TCP on port 8888 depending on device capabilities and installer preference. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so validate device specific details against the official manufacturer documentation.

## Protocol Overview

The protocol used by the LK900 family defines how the tracker reports position, status, and alarms to a remote server such as Plaspy. At a public level this includes identifying the device to the server, transmitting GPS location and GSM connectivity information, and delivering event notifications that drive platform features like geofences and alerts.

- Enables the LK900 to report periodic and event driven location data to Plaspy
- Carries device identifiers and basic status so Plaspy can associate reports with an asset
- Transmits event types that support geofence alerts, overspeed, movement, and low battery notifications
- Allows the tracker to deliver historic route points for trace checking and playback
- Supports both UDP and TCP transports so the device can be configured for the network environment

## How Plaspy Detects the Protocol

Plaspy accepts incoming reports on a shared endpoint and port and uses that input to recognize the tracker reporting format. In most cases installers do not need to select a protocol manually in Plaspy as long as the LK900 is configured to report to the Plaspy endpoint.

- Plaspy receives device traffic at d.plaspy.com and 54.85.159.138 on port 8888
- The same port is used for all devices supported by Plaspy which simplifies device configuration
- Devices can be set to use UDP or TCP on port 8888 depending on their network support
- If the device is configured to send reports to the Plaspy endpoint, protocol detection is automatic
- Proper device identifier configuration on the tracker side helps Plaspy map incoming messages to the correct asset

## Transport and Connection Context

Transport choices and server addressing determine how the LK900 establishes communications with Plaspy but do not change the public role of the protocol. The tracker may be set up to deliver its reports over either UDP or TCP, and it can point to Plaspy by domain name or by IP address depending on installer preference or local DNS conditions.

- LK900 devices may be configured to use UDP or TCP on port 8888
- Plaspy server domain d.plaspy.com and server IP 54.85.159.138 are both acceptable targets for device reporting
- All devices in Plaspy use the same port which reduces configuration differences between models
- Network reliability and NAT behavior can influence whether UDP or TCP is preferable for a specific deployment
- Confirm that mobile network APN and outbound port rules allow traffic to the Plaspy endpoint on port 8888

## Protocol Compatibility Notes

- Firmware revisions across LK900 A B and C variants can alter message timing and available features
- Hardware revisions or regional model differences may change supported transports or event sets
- Manufacturer side settings such as default reporting intervals or power management affect how frequently data is sent
- Selecting UDP or TCP can affect delivery guarantees and battery impact depending on use case
- Always verify device identifiers and reporting settings when registering an LK900 with Plaspy
- Consult official LK GPS documentation for firmware specific commands and behavior before making configuration changes

## Why Protocol Understanding Matters

Knowing the public aspects of the LK900 communication protocol helps ensure reliable setup, correct event interpretation, and predictable behavior in Plaspy. A clear understanding reduces setup time and supports effective troubleshooting when devices do not appear in the platform as expected.

- Helps confirm the device is pointed to the correct Plaspy endpoint and port
- Aids in troubleshooting common issues such as missing reports or incorrect asset mapping
- Informs decisions about transport selection to balance reliability and battery life
- Lets integrators interpret which device events will surface in Plaspy dashboards and alerts
- Supports validation that device firmware and model variant match organizational requirements

## Why Use Plaspy with This Protocol

Using the LK900 tracker with Plaspy gives organizations visibility into asset location, movement, and status through an established tracking platform. The LK900 family provides long standby battery options, IP67 water resistance, and magnet mounting for flexible deployment, while Plaspy handles incoming location and event data at scale, presenting it through monitoring tools and alerts suitable for fleets, rentals, and asset protection.

To learn more about how Plaspy works with devices like the LK900 visit https://www.plaspy.com. For the most current device level protocol details, firmware notes, and model specific information check the manufacturer site at https://www.lk-gps.com since protocol support and firmware behavior can change over time.
