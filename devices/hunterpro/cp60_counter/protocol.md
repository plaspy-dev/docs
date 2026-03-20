---
slug: /hunterpro/cp60_counter/protocol
id: cp60_counter-protocol
sidebar_label: Protocol
title: HunterPro - CP60-COUNTER Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol reference for HunterPro CP60-COUNTER integration with Plaspy covering connection settings and compatibility notes
keywords:
  - HunterPro CP60-COUNTER protocol
  - HunterPro CP60-COUNTER GPS tracker
  - HunterPro protocol Plaspy
  - CP60-COUNTER tracking protocol
  - GPS tracker communication Plaspy
  - passenger counter tracker protocol
  - fleet management HunterPro
  - GPRS GPS tracker compatibility
  - tracker compatibility Plaspy
  - CP60-COUNTER integration
---

# HunterPro - CP60-COUNTER Protocol

This page provides public protocol context for using the HunterPro CP60-COUNTER GPS tracker with the Plaspy platform. It summarizes how the device communicates in general terms, what connection settings Plaspy accepts, and practical compatibility considerations for passenger transport and fleet management deployments.

The CP60-COUNTER is designed for passenger counting and real time location reporting using GPRS. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the Plaspy endpoint. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so this page focuses on public, non sensitive information to help you plan integration and troubleshooting.

## Protocol Overview

The CP60-COUNTER protocol enables the tracker to report location, movement, and passenger counting data to a remote server so that fleet systems like Plaspy can display and process that information. The public view of the protocol covers the purpose and role of messages rather than proprietary or firmware specific packet structures.

- Transmits device identifiers and reporting data so the server can associate messages with a vehicle and counter state
- Sends location and timestamp information to enable mapping and geofencing in Plaspy
- Delivers passenger entry and exit counts or aggregated counter events for operational reporting
- Uses GPRS cellular transport for internet delivery from the device to the server endpoint
- Supports device configuration over the network where supported by the hardware and firmware

## How Plaspy Detects the Protocol

Plaspy accepts incoming connections at a shared endpoint and port and is designed to automatically detect the tracker protocol for devices that report correctly. In most cases you do not need to select a protocol inside Plaspy if the CP60-COUNTER is configured to report to the Plaspy endpoint.

- Plaspy receives tracker data at the domain d.plaspy.com which resolves to 54.85.159.138
- The Plaspy service listens on port 8888 for all supported devices
- Plaspy automatically detects the tracker protocol when the device connects and reports to the endpoint
- Users typically configure the tracker to point to d.plaspy.com or the IP address 54.85.159.138 and use the shared Plaspy port
- No per device port selection is required because all devices in Plaspy use the same port

## Transport and Connection Context

Connection setup for the CP60-COUNTER is handled at the transport layer and depends on device capability and configuration choices. Plaspy supports both common transport options so you can match the tracker configuration to your network environment.

- The device may be configured using UDP or TCP on port 8888 depending on the firmware and settings available on the unit
- Plaspy accepts traffic addressed to d.plaspy.com or directly to 54.85.159.138 on port 8888
- Port 8888 is the single port used across Plaspy for all devices to simplify configuration
- Choose UDP when lightweight reporting is acceptable and the device firmware expects that transport
- Choose TCP when a reliable transport is required and the tracker supports persistent connections

## Protocol Compatibility Notes

- Firmware revisions can change message cadence, available fields, or configuration commands; verify the firmware version on installed units
- Hardware revisions or optional modules may alter supported transports or sensor inputs such as passenger counters
- Manufacturer side settings and command syntax can vary between firmware builds and regional models
- If a device does not reach Plaspy, confirm it is pointed to d.plaspy.com or 54.85.159.138 and using port 8888 with the expected transport
- Some features such as remote configuration or advanced counters may require specific firmware or enabled options
- Always validate any changes in a controlled environment before wide deployment

## Why Protocol Understanding Matters

Understanding the communication protocol helps with successful setup, diagnosing connectivity issues, and maintaining reliable operation in production fleets. Knowing how the CP60-COUNTER reports data and how Plaspy accepts that data reduces time spent troubleshooting and improves operational confidence.

- Ensures device reporting is correctly addressed to the Plaspy endpoint and port
- Helps identify whether transport selection between UDP and TCP is appropriate for your network
- Aids in interpreting device behavior that may be caused by firmware differences or settings
- Supports planning for feature availability such as passenger counting events and reporting intervals
- Reduces deployment time by clarifying which device settings must match Plaspy connection expectations

## Why Use Plaspy with This Protocol

Using the HunterPro CP60-COUNTER with Plaspy provides a practical way for passenger transport operators to combine accurate location tracking with passenger counting data in a single fleet management platform. Plaspy’s automatic protocol detection and uniform port approach simplify device onboarding so operations teams can focus on analytics and service quality rather than low level connectivity.

If you want to learn more about how Plaspy works with devices like the CP60-COUNTER and the broader capabilities of the platform, visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and implementation guidance please verify information with HunterPro at http://hunterpro.com.tw/ since protocol support and manufacturer behavior can change over time.
