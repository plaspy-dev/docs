---
slug: /khd/kg100/features
id: kg100-features
sidebar_label: Features
title: KHD - KG100 Features
sidebar_class_name: menu_item_tracker
description: Public feature overview for the KHD KG100 GPS tracker and how it integrates with Plaspy for vehicle tracking and monitoring
keywords:
  - KHD KG100
  - KHD KG100 features
  - KHD KG100 GPS tracker
  - KG100 Plaspy
  - vehicle tracking KG100
  - KG100 real time tracking
  - KG100 geo fence
  - KG100 historical playback
  - KHD GPS tracker
  - KG100 remote control
---

# KHD - KG100 Features

This page provides a public feature context for using the KHD KG100 GPS tracker with Plaspy. It summarizes the KG100 capabilities as they relate to vehicle and motor tracking, and describes how those capabilities are typically reflected when the device is connected to the Plaspy platform. The intent is to give operations, fleet, and technical users a clear view of practical functionality without reproducing sensitive implementation details.

Exact feature availability can vary by device firmware, hardware revision, regional variant, and installation method. Some behaviours and optional functions depend on manufacturer settings, configuration via SMS or GPRS, and how the tracker is integrated into a vehicle. For precise and current device specifications consult the official KHD documentation.

## Feature Overview

The KG100 is a professional vehicle and motor tracker that combines cellular communication and satellite positioning to deliver location reporting, historical playback, event detection, and remote control options. It is designed to be compatible with third party tracking platforms and can send data via GPRS or SMS to a backend server.

- Real time location reporting for continuous vehicle awareness and tracking
- Historical route playback to review past movements and trip details
- Geo fencing support to define virtual boundaries and receive boundary related events
- Remote control capabilities for certain vehicle functions such as remote engine immobilization and door control where supported
- Flexible communication options enabling integration with custom tracking platforms and smartphone based configuration

## Core Features of KHD - KG100

- GPS and GLONASS satellite positioning for reliable location fixes
- GSM based communication using GPRS or SMS for data delivery to backend servers
- Real time tracking capability to provide current position updates
- Historical route logging for playback of past trips and movement analysis
- Geo fence configuration to detect entry and exit of predefined areas
- Remote control commands supported for authorized remote operations
- Compatibility with custom tracking platforms and mobile configuration using Android or iOS devices

## How These Features Work with Plaspy

When a KG100 is connected to Plaspy, the device reports positioning and event data into the Plaspy backend where it becomes visible for monitoring and analysis. Plaspy automatically detects common tracker protocols and ingests location reports so operations teams can use platform tools for oversight.

- Live position updates appear on Plaspy maps for location awareness and dispatching
- Historical route playback within Plaspy uses device reports to reconstruct past movements
- Geo fence events from the device can be captured and presented as alerts or timeline events
- Remote control requests can be routed through Plaspy to the device where manufacturer support and secure configuration permit
- Device configuration may be managed by sending configuration commands via the cellular channel or using platform assisted provisioning with the device directed to Plaspy endpoints
- Plaspy accepts standard device connections and auto detection simplifies adding KG100 units to an account

Note: Plaspy communicates with devices using standard connectivity methods and automatically detects the tracker protocol for supported units.

## Typical Use Cases

- Fleet vehicle monitoring for logistics and service operations
- Motor tracking for motorcycles and light vehicles requiring compact tracking solutions
- Theft deterrence and recovery assistance using location reporting and remote control options
- Route analysis and driver performance review using historical playback
- Rental and shared vehicle oversight for usage monitoring and boundary enforcement
- Remote operations where SMS or GPRS based control is needed for specific functions

## Feature Availability Notes

- Feature sets may vary between firmware versions and hardware revisions supplied by the manufacturer
- Regional cellular banding and network services can affect GPRS and SMS based functionality
- Some remote control functions require specific wiring and installation choices during device setup
- Manufacturer default settings and provisioning determine whether the device sends events by SMS or GPRS
- Always verify which features are enabled by the installer or activated in a given device before relying on them operationally

## Why Use Plaspy with These Features

Using Plaspy with the KG100 provides a single platform to view live locations, play back historical trips, manage geo fence events, and coordinate remote commands when supported by the device. Plaspy’s platform context turns the raw reports from a KG100 into operational information that supports dispatch, security, and fleet analytics.

To learn more about how Plaspy supports device integration and fleet monitoring, visit https://www.plaspy.com. For the latest device specifications, firmware notes, and manufacturer implementation details about the KG100 consult the official KHD site at http://www.khd.hk.
