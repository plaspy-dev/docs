---
slug: /atrack/at5i/features
id: at5i-features
sidebar_label: Features
title: ATrack - AT5i Features
sidebar_class_name: menu_item_tracker
description: Public feature overview of the ATrack AT5i GPS tracker and how its capabilities map to the Plaspy platform
keywords:
  - ATrack AT5i features
  - ATrack AT5i GPS tracker
  - AT5i capabilities
  - AT5i features for Plaspy
  - GPS GLONASS tracker
  - vehicle tracking device
  - geo fence support
  - AES 128 encryption
  - digital analog IO
  - real time tracking
---

# ATrack - AT5i Features

This page describes the public feature context for using the ATrack AT5i tracker with the Plaspy platform. It highlights the main, non sensitive capabilities of the AT5i and explains how those capabilities map to monitoring, eventing, and historical review inside Plaspy.

Exact feature availability and behavior can vary by firmware version, hardware revision, installation method, and manufacturer implementation. Use this page as a practical summary and consult the device manufacturer documentation for precise, up to date technical specifics.

## Feature Overview

The AT5i is positioned as a versatile vehicle tracker focused on reliable position reporting, configurable event reporting, and basic I O integration options. It combines multi GNSS positioning, GPRS reporting, and configurable alarms to support both individual vehicle monitoring and fleet applications.

- Real time location updates over the device GPRS link for current position and movement awareness
- Dual GNSS support with GPS and GLONASS for improved satellite availability and positioning
- Configurable real time tracking and on device logging to preserve recent movement history
- User defined events and alarms that can be customized to match operational triggers
- Multiple digital and analog I O ports for integration with external hardware and sensors
- Security features including AES 128 data encryption and GPS antenna tamper detection and reporting

## Core Features of ATrack - AT5i

- GPRS based reporting for continuous location transmission to a server
- GPS and GLONASS satellite support for positioning
- Configurable real time tracking intervals and local logging of position data
- Customizable event generation for movement, input changes, and other conditions
- Multiple digital and analog input output ports for peripheral integration
- AES 128 data encryption to protect device communications
- GPS antenna tamper detection and dedicated tamper reporting
- Support for up to 64 user defined geo fences in a variety of shapes

## How These Features Work with Plaspy

Plaspy receives and displays the AT5i position and event data so operators can monitor vehicles and respond to alerts. Plaspy's device handling is designed to ingest standard tracker messages and present them as map locations, event streams, and historical tracks.

- Real time positions appear on Plaspy maps and are updated as the device reports location data
- Custom events from the AT5i are reflected in Plaspy event logs so teams can review triggers and timestamps
- Geo fence entries and exits created on the device or within Plaspy are surfaced as alerts and history items
- Digital and analog I O changes reported by the tracker can be recorded and shown as device inputs or custom data points
- Historical tracking and on device logging can be used to reconstruct recent movement inside Plaspy for investigations or route review

## Typical Use Cases

- Live vehicle location monitoring for small fleets and individual vehicles
- Event driven alerts for movement, tamper, or I O changes
- Geo fence monitoring to detect area entry and exit across up to 64 user defined zones
- Integration with vehicle mounted peripherals via digital and analog I O ports
- Retrospective route and movement review using on device logging and Plaspy history
- Security monitoring with antenna tamper detection and encrypted communications

## Feature Availability Notes

- Firmware and regional variants can change how features are exposed or configured on the device
- Hardware revisions and installation wiring determine which digital and analog I O ports are available and how they behave
- The number and shape options for geo fences depend on device firmware and management tools
- Encryption and tamper detection require correct configuration on both device and server to function as expected
- Always verify feature support and configuration steps against the official manufacturer documentation for your device revision

## Why Use Plaspy with These Features

Combining the AT5i with Plaspy gives organizations a single view for location awareness, event monitoring, and historical review. Plaspy can centralize the device position stream, expose customized events from the tracker, and retain movement history for operational analysis. This pairing is useful for teams that need practical vehicle oversight without exposing device level technical complexity to end users.

To learn more about Plaspy and how it supports devices like the ATrack AT5i visit https://www.plaspy.com. For the most current device specifications, firmware notes, and manufacturer guidance consult the official ATrack website https://www.atrack.com.tw/ as device features and firmware behavior may change over time.
