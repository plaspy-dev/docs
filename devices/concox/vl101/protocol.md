---
slug: /concox/vl101/protocol
id: vl101-protocol
sidebar_label: Protocol
title: Concox - VL101 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for Concox VL101 GPS tracker and Plaspy compatibility with connection and transport guidance
keywords:
  - Concox VL101
  - Concox VL101 protocol
  - VL101 GPS protocol
  - VL101 communication
  - Concox protocol Plaspy
  - GPS tracker protocol
  - vehicle tracking protocol
  - Plaspy device compatibility
  - dual frequency GPS tracker
  - GNSS tracker compatibility
---

# Concox - VL101 Protocol

This page documents the public protocol context for using the Concox VL101 tracker with Plaspy. It describes how the device typically communicates with a cloud endpoint, the role of the tracker reporting protocol, and the practical connection settings you should expect when integrating VL101 devices with Plaspy. The details here are written for implementers, integrators, and technical users who need to understand connection and compatibility considerations without exposing private implementation details.

Plaspy uses a shared connection endpoint and port across supported devices and automatically detects the tracker protocol when a device reports to the platform. For Plaspy the endpoint is d.plaspy.com and the platform is reachable at 54.85.159.138 using port 8888. Devices may be configured to use either UDP or TCP on port 8888. Exact protocol behavior can vary by firmware version, hardware revision, region, and manufacturer implementation, so verify settings for your specific VL101 firmware and hardware variant.

## Protocol Overview

The VL101 uses a tracker reporting protocol to send telemetry and state information from the device to a cloud platform. That protocol governs how the tracker identifies itself, transmits GNSS fixes and sensor data, and reports alarms or status changes. Plaspy receives those messages at its shared endpoint and uses the reported data to present location, status, and events in the platform.

- Enables periodic and event driven location reports from the VL101 to the cloud
- Carries device identity and status so Plaspy can associate messages with the correct asset
- Transmits GNSS positioning and INS aided data to maintain accurate tracking even in low signal areas
- Allows reporting of IO states such as ignition, sensors, and driving behavior alerts
- Supports LTE with GSM fallback for resilient data transport in varied network conditions

## How Plaspy Detects the Protocol

Plaspy observes incoming connections and messages to recognize the tracker protocol used by a reporting device. Because Plaspy uses a shared endpoint and port for all supported trackers, the platform is able to accept and classify traffic from many device models without requiring the user to manually select a protocol in most cases.

- Plaspy listens on a single port for all devices and automatically detects the tracker protocol
- Point VL101 devices to d.plaspy.com or 54.85.159.138 so messages arrive at the Plaspy endpoint
- Devices may use either UDP or TCP on port 8888 depending on device capabilities and configuration
- When a properly configured device reports, Plaspy will associate the incoming data with the device identity included in the message
- Manual protocol selection in the platform is typically unnecessary if the device is configured to report to the Plaspy endpoint

## Transport and Connection Context

Connection context covers how the VL101 sends data to Plaspy and what network settings are commonly required. The VL101 supports LTE with GSM fallback and may be configured for UDP or TCP transport. For Plaspy integration, ensure the device is set to report to the shared Plaspy address and port so the platform can accept and process messages.

- Devices can be configured to report to d.plaspy.com or directly to 54.85.159.138
- Plaspy uses port 8888 for all devices and transports, simplifying configuration
- The VL101 may be set to use UDP or TCP on port 8888 according to device firmware options
- LTE and GSM networks provide the data path; confirm APN and SIM settings on the device
- Network stability and carrier behavior can affect reporting intervals and connection persistence

## Protocol Compatibility Notes

- Firmware versions can change message behavior and available features; always confirm firmware details before large scale deployment
- Hardware revisions and regional variants of the VL101 may enable or disable certain interfaces or sensors
- Some features such as INS aided tracking, dual frequency GNSS, and accessory interfaces may require specific firmware or configurations
- Transport choice between UDP and TCP can affect delivery behavior and should match device capabilities and operator requirements
- Manufacturer defaults might point to a different server; update the device report address to d.plaspy.com or 54.85.159.138 when integrating with Plaspy
- Validate device identity reporting to ensure Plaspy can match messages to the correct asset record

## Why Protocol Understanding Matters

A clear grasp of the VL101 communication protocol and connection context helps ensure reliable device onboarding, consistent telemetry, and efficient troubleshooting. Understanding the protocol scope and the interplay of firmware, transport, and server endpoint reduces integration delays and supports operational reliability.

- Speeds up initial onboarding by confirming correct report address and transport settings
- Helps diagnose missed reports or unexpected device behavior by checking transport and firmware compatibility
- Ensures alerts, ignition detection, and remote control functions behave as expected when supported by the device
- Guides decisions on network and APN setup to improve connectivity in the field
- Supports planning for firmware updates and hardware rollouts across a fleet

## Why Use Plaspy with This Protocol

Using the Concox VL101 with Plaspy gives organizations a consistent cloud endpoint and a platform that automatically recognizes device messages sent to the shared Plaspy address. The VL101G feature set including multi GNSS support, dual frequency positioning, INS aided tracking, and robust network fallbacks pairs well with a platform that centralizes reporting and device management.

If you want to learn more about Plaspy and how it handles device integration, visit https://www.plaspy.com. For the latest device specific protocol details, firmware notes, and hardware revisions for Concox products consult the manufacturer at https://www.iconcox.com/ as implementation details can change over time.
