---
slug: /gosafe/can_9600/features
id: can_9600-features
sidebar_label: Features
title: Gosafe - CAN-9600 Features
sidebar_class_name: menu_item_tracker
description: Public feature summary for the Gosafe CAN-9600 GPS tracker and its compatibility with Plaspy for FMS data forwarding and monitoring
keywords:
  - Gosafe CAN-9600
  - Gosafe CAN 9600 features
  - CAN 9600 GPS tracker
  - Gosafe FMS reader
  - J1939 J1708 reader
  - RS232 FMS output
  - FMS data forwarding
  - Plaspy compatibility
  - vehicle fleet tracking
  - truck and bus telematics
---

# Gosafe - CAN-9600 Features

This page describes the public feature context for the Gosafe CAN-9600 and how its FMS data capabilities are used with Plaspy. It focuses on practical, non sensitive information about what the CAN-9600 can do and how that data is visible and useful within the Plaspy platform.

Exact feature availability and behavior can vary by firmware, hardware revision, installation type, and the manufacturer implementation. For the most current device specific details check the manufacturer documentation and your device firmware notes.

## Feature Overview

The CAN-9600 is built to read vehicle FMS data from trucks and buses and present that information via a serial interface for onward transmission to tracking systems. Its primary value is bridging vehicle FMS output into a standard serial stream that can be integrated with compatible GPS tracking devices and server platforms.

- Reads FMS data from trucks and buses using standard CAN protocol families
- Supports industry standard J1939 and J1708 FMS formats for broad vehicle coverage
- Provides an RS232 serial output for connecting to GPS trackers or onboard devices
- Uses an SMS serial interface for remote serial communication where applicable
- Designed for straightforward integration with GPS trackers and telematics devices
- Enables forwarding of FMS data to a server for web based access and monitoring

## Core Features of Gosafe - CAN-9600

- FMS data reader tailored for commercial vehicle networks
- Compatibility with SEA J1939 and SEA J1708 protocol families
- RS232 serial interface to transmit vehicle data to external devices
- SMS serial interface for remote serial data delivery
- Protocol designed to be easy to integrate with GPS trackers and telematics units
- Known compatibility with Gosafe tracker models such as G6S and G92I
- Capability to relay vehicle FMS data to a server for platform access

## How These Features Work with Plaspy

When used with Plaspy, the CAN-9600 serves as a gateway that brings vehicle FMS output into the Plaspy environment for centralized monitoring and reporting. Plaspy automatically detects many tracker protocol variations and surfaces incoming data within the platform for operational use.

- FMS data forwarded by a connected GPS tracker is received and associated with the appropriate device in Plaspy
- Plaspy presents vehicle and engine related FMS information as part of the device timeline and reports
- Integration simplifies fleet level visibility by consolidating location and FMS streams in one platform
- Device protocol detection in Plaspy reduces configuration overhead when adding CAN-9600 linked trackers
- Incoming FMS messages can be included in logs and exported records accessible from the Plaspy web platform

## Typical Use Cases

- Fleet operators collecting vehicle FMS data from trucks and buses for centralized monitoring
- Integrating FMS output with existing GPS trackers to enrich tracking records with vehicle data
- Remote access to serial FMS data where RS232 output is bridged to a telematics unit
- Consolidating location and vehicle parameter streams for operational oversight and reporting
- Using standard J1939 and J1708 support to handle mixed vehicle fleets with different bus standards
- Feeding vehicle data into a server platform for archival, analysis, or compliance workflows

## Feature Availability Notes

- Firmware and hardware revisions can change which FMS parameters are exposed or how they are formatted
- Installation choice and the quality of the serial connection influence the availability of RS232 output
- Regional vehicle variations and OEM implementations of J1939 J1708 may affect which FMS fields are present
- Compatibility with specific GPS trackers can depend on the tracker firmware and integration settings
- Review the manufacturer documentation and release notes to confirm behavior for a particular device unit

## Why Use Plaspy with These Features

Using the Gosafe CAN-9600 together with Plaspy provides a practical path to collect, consolidate, and act on vehicle FMS data alongside location tracking. Plaspy helps turn serial FMS streams relayed by a GPS tracker into visible events, logs, and reports so operators can maintain oversight across mixed fleets.

Learn more about how Plaspy supports vehicle tracking and telematics on the Plaspy website https://www.plaspy.com. For the latest and most detailed device specific information including firmware behavior and manufacturer implementation details, verify specifications on the Gosafe website https://gosafesystem.com/.
