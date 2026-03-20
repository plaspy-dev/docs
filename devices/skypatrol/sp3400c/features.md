---
slug: /skypatrol/sp3400c/features
id: sp3400c-features
sidebar_label: Features
title: SkyPatrol - SP3400C Features
sidebar_class_name: menu_item_tracker
description: Public feature guide for the SkyPatrol SP3400C GPS tracker and how its capabilities integrate with Plaspy fleet and vehicle tracking
keywords:
  - SkyPatrol SP3400C
  - SP3400C features
  - SkyPatrol GPS tracker
  - CDMA GPS tracker
  - vehicle tracking Plaspy
  - Plaspy compatible tracker
  - over the air firmware
  - 3 axis accelerometer
  - digital outputs ignition input
  - UDP SMS data communications
---

# SkyPatrol - SP3400C Features

This page provides a public overview of the SkyPatrol SP3400C feature set and explains how those capabilities are commonly used with the Plaspy fleet and asset management platform. It focuses on the practical, non sensitive aspects of what the device reports and how those reports can assist operational visibility inside Plaspy.

Exact feature availability and behavior can vary by firmware version, hardware revision, installation type, regional carrier support, and the manufacturer's implementation choices. For the most current device specific details consult official SkyPatrol documentation.

## Feature Overview

The SP3400C is a rugged CDMA GPS tracker designed for vehicle telematics and a range of fleet and consumer applications. It combines a high precision GPS engine with cellular connectivity and discrete I O capability, and supports remote firmware updates to help keep deployments current.

- CDMA 1xRTT dual band cellular connectivity for carrier certified deployments in supported regions
- High precision GPS engine with integrated antennas for reliable location acquisition
- Built in 3 axis accelerometer to support movement and event detection
- Over the air firmware updates to manage device settings and firmware remotely
- Discrete I O including digital outputs, analog input, and ignition input for vehicle control and monitoring
- Support for UDP and SMS data communications along with an embedded TCP IP stack

## Core Features of SkyPatrol - SP3400C

- CDMA 1xRTT 800 1900 MHz dual band cellular support for carrier compliance where available
- Integrated high precision GPS engine and antennas for improved acquisition and tracking sensitivity
- Built in 3 axis accelerometer for detecting motion and basic event triggers
- Over the air firmware update capability for remote management and configuration
- Supports UDP and SMS for uplink and downlink communications alongside an embedded TCP IP stack
- Two discrete I O circuits including 2 digital outputs 1 analog input and 1 ignition input
- Wireless auto ignition sense and relay trigger support to enable or disable vehicle components when configured

## How These Features Work with Plaspy

Plaspy ingests location and event reports from compatible trackers and maps those inputs to platform monitoring, reporting, and alerting features. The SP3400C's reporting capabilities can be surfaced in Plaspy to provide ongoing operational awareness and historical location data.

- Plaspy automatically detects common tracker protocols and can accept device reports over supported transport types
- GPS position and acquisition quality appear in Plaspy location history and live tracking views
- Movement events derived from the integrated accelerometer can be represented as activity or tamper indicators inside Plaspy
- Discrete I O events and ignition state updates can be used to drive status fields, triggers, and custom workflows in the platform
- Over the air firmware capability helps maintain consistent behavior across a deployed fleet when coordinated with device management processes

## Typical Use Cases

- Fleet location tracking and route visibility for light and heavy duty vehicles
- Subprime automotive and recovery services using relay trigger capability for controlled disable or enable workflows
- Consumer telematics and vehicle monitoring where compact rugged hardware is required
- Deployments in challenging urban or rural environments benefiting from optimized antenna design and GPS sensitivity
- Remote firmware and configuration management for large scale rollouts
- Ignition monitoring for runtime reporting and basic usage analytics

## Feature Availability Notes

- Regional carrier support for CDMA bands varies by country and operator confirm local compatibility before purchase
- Firmware features such as OTA update behavior or event generation may differ by firmware version or manufacturer released builds
- Hardware revisions and optional variants may change the exact set of I O pins available or their behavior
- Installation wiring and vehicle integration can affect how ignition sensing and relay control operate in practice
- Consult SkyPatrol documentation for the most current technical and certification details for the SP3400C

## Why Use Plaspy with These Features

Using the SP3400C together with Plaspy provides a practical path to operational visibility for vehicle fleets and telematics projects. The device supplies location, motion, and discrete input information while Plaspy centralizes that data into maps, history, and configurable event handling to support oversight and decision making.

To learn more about Plaspy and how it can work with trackers like the SkyPatrol SP3400C visit https://www.plaspy.com. For the latest device specifications firmware notes and manufacturer guidance verify current information on the SkyPatrol website https://www.skypatrol.com/
