---
slug: /meitrack/mvt_380/protocol
id: mvt_380-protocol
sidebar_label: Protocol
title: Meitrack - MVT-380 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol summary for Meitrack MVT 380 and how it communicates with Plaspy for tracking and remote commands
keywords:
  - Meitrack MVT-380 protocol
  - Meitrack MVT-380 GPS protocol
  - MVT-380 protocol
  - Meitrack tracker protocol
  - MVT-380 Plaspy compatibility
  - vehicle tracking Meitrack
  - GPS tracker communication Plaspy
  - Meitrack tracking protocol
  - MVT 380 tracking protocol
  - Meitrack GPS logging protocol
---

# Meitrack - MVT-380 Protocol

This page describes the public protocol context for using the Meitrack MVT-380 tracker with Plaspy. It focuses on how the device communicates with Plaspy in general terms, the connection settings you will typically configure on the device, and what to expect during integration. The intent is to help fleet managers and technical integrators understand the communication role of the tracker without exposing device internals.

The MVT-380 is compatible with Plaspy and provides real time tracking, geo fence alerts, GPS logging, two way audio, an optional engine stop relay, sleep mode, SOS button reports, AGPS assisted position fixes, and speeding alerts. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol. Exact protocol behavior can vary with firmware version, hardware revision, and manufacturer implementation, so device configuration and manufacturer documentation should be used to finalize any setup steps.

## Protocol Overview

At a high level the device protocol defines how the MVT-380 reports location, events, and state to a remote server and how remote commands are delivered back to the device. The protocol is the mechanism that transforms device status and sensor readings into messages Plaspy can ingest and present in the platform.

- Enables the tracker to send location updates, timestamps, and status reports to a remote server
- Carries event notifications such as geo fence entry and exit, SOS presses, and speeding alerts
- Allows delivery of remote commands supported by the device such as engine control and two way audio activation
- Provides device identification and session information so Plaspy can associate messages with the correct asset
- Supports device configuration choices such as transport selection and reporting intervals

## How Plaspy Detects the Protocol

Plaspy automatically identifies the tracker protocol once the device is configured to report to the Plaspy endpoint. In most cases you do not need to manually choose a protocol inside Plaspy when the tracker is correctly pointed at the Plaspy server and using the shared port.

- Plaspy uses a single public endpoint for device reporting at d.plaspy.com
- The Plaspy server IP for direct configuration is 54.85.159.138
- All devices in Plaspy use the same port for reporting, simplifying device setup across models
- Plaspy automatically detects the tracker protocol when messages arrive at the server
- When a tracker is configured correctly to report to the Plaspy endpoint, manual protocol selection in the platform is typically not required

## Transport and Connection Context

The MVT-380 supports network transport options commonly used by Meitrack devices. Transport choice affects how the device opens and maintains connections to Plaspy, and some carriers or network conditions may influence which transport works best.

- The device may be configured to use either UDP or TCP on port 8888 depending on model firmware and configuration
- Devices can be pointed to the hostname d.plaspy.com or directly to the IP 54.85.159.138
- Port 8888 is the shared port Plaspy uses for all device reporting across supported trackers
- Choose UDP when stateless reporting or lower overhead is preferred and TCP when reliability of individual message delivery is required by your use case
- Verify APN and SIM settings on the device to ensure mobile connectivity before attempting to register with the Plaspy endpoint

## Protocol Compatibility Notes

- Firmware revisions can change message timing, optional fields, and supported commands so version checks are important
- Hardware revisions and accessory options such as a relay for engine stop or two way audio modules can alter available remote commands
- Manufacturer side settings and regional firmware builds sometimes introduce small behavior differences between otherwise identical models
- Transport selection between UDP and TCP should match the device configuration and any carrier limitations
- Plaspy will attempt automatic detection but the device must be correctly configured to report to d.plaspy.com or 54.85.159.138 on port 8888
- Validate key features such as geo fences, SOS reporting, and logging behavior after initial setup to confirm end to end operation

## Why Protocol Understanding Matters

Understanding the tracker's communication protocol helps ensure reliable setup, effective troubleshooting, and consistent operation over time. Awareness of how messages are delivered and how the device identifies itself reduces integration friction and speeds resolution of connectivity issues.

- Makes it easier to confirm whether messages reach the Plaspy server and are parsed correctly
- Helps troubleshoot missing data, irregular update intervals, or event omissions such as geo fence triggers
- Informs decisions about transport selection and reporting intervals to balance data needs and battery life
- Clarifies which remote commands are available and how device accessories interact with command delivery
- Supports planning for firmware updates or hardware rollouts across a mixed fleet

## Why Use Plaspy with This Protocol

Using the Meitrack MVT-380 with Plaspy gives organizations access to real time tracking, event management, and detailed GPS logging in a single platform. Plaspy's shared endpoint model and automatic protocol detection simplify deployment across devices and reduce configuration overhead when rolling out trackers across a fleet.

To learn more about Plaspy and how it works with devices like the MVT-380 visit https://www.plaspy.com. For the most current device specific protocol details, firmware behavior, and implementation notes consult the manufacturer documentation at https://www.meitrack.com/ to verify the latest information.
