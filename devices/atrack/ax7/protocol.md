---
slug: /atrack/ax7/protocol
id: ax7-protocol
sidebar_label: Protocol
title: ATrack - AX7 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol reference for integrating ATrack AX7 GPS tracker with Plaspy using shared connection settings and automatic protocol detection
keywords:
  - ATrack AX7 protocol
  - ATrack AX7 GPS protocol
  - ATrack AX7 communication protocol
  - ATrack AX7 tracking protocol
  - ATrack AX7 Plaspy compatibility
  - AX7 OBDII tracker
  - ATrack vehicle tracker protocol
  - GPS tracker protocol Plaspy
  - fleet tracking AX7
  - OBDII GPS protocol
---

# ATrack - AX7 Protocol

This page provides a public protocol context for using the ATrack AX7 vehicle tracker with the Plaspy platform. It focuses on the communication and connection aspects that matter when integrating the AX7 for fleet control, vehicle tracking, or car rental applications. The AX7 is an OBDII plug in tracker with built in GPS and GSM antennas, internal memory, a backup battery, sleep mode, and support for TCP and UDP reporting, and those hardware characteristics influence how it communicates with a cloud platform like Plaspy.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so this page gives public, implementation neutral guidance about how the AX7 typically communicates with Plaspy while encouraging verification against manufacturer documentation and firmware release notes.

## Protocol Overview

The protocol of a GPS tracker describes how it identifies itself, how it sends location and event data, and how it receives optional server commands. For the AX7, the tracker protocol's public role is to reliably deliver position, status and event information from the device to Plaspy so the platform can display and process that data for fleet monitoring and operational use.

- Enables the AX7 to report location, speed, timestamps, and event indications to Plaspy in a way the platform can consume
- Provides identity or device ID information so Plaspy can associate incoming reports with the correct vehicle record
- Transports status data such as power, battery, and internal events based on the AX7 configuration and firmware behavior
- Supports both TCP and UDP transport methods depending on device configuration and network conditions
- Allows Plaspy to acknowledge or process incoming reports and apply platform level features such as geofencing, alerts, and historical playback

## How Plaspy Detects the Protocol

Plaspy accepts reports from many tracker models using a unified endpoint and automatically detects the tracker protocol when a device connects and begins reporting. In most cases a properly configured AX7 will send data to Plaspy and the platform will interpret the incoming stream without manual protocol selection.

- Plaspy's public server endpoint is d.plaspy.com and can also be reached at IP address 54.85.159.138
- The platform listens on port 8888 which is used for all supported devices across Plaspy
- The AX7 may be configured to report to Plaspy using either UDP or TCP on port 8888
- When the device is pointed to the Plaspy endpoint and sends its initial reports, Plaspy will detect and process the AX7 protocol automatically
- Users typically do not need to set a protocol inside Plaspy if the device is correctly configured to report to d.plaspy.com on the correct port

## Transport and Connection Context

Transport selection and DNS or IP targeting determine how the AX7 sends its data to Plaspy. The AX7 supports both TCP and UDP and can be configured at the device level to use the transport that best fits the deployment and network environment.

- The AX7 may be configured to use UDP or TCP on port 8888 depending on device settings and firmware support
- Devices can be pointed to the Plaspy domain d.plaspy.com or directly to the IP 54.85.159.138
- Plaspy uses port 8888 as a shared port for all devices, simplifying device configuration for fleets with mixed models
- TCP can offer reliable delivery in some network conditions while UDP may be preferred for lower overhead reporting
- Network firewalls and mobile operator settings can affect delivery; ensure that outbound device connections to d.plaspy.com on port 8888 are allowed

## Protocol Compatibility Notes

- Firmware revisions may change message content, available fields, or event reporting behavior; always check the device firmware revision when validating behavior
- Hardware revisions and regional variants can introduce differences in supported GSM bands or I/O behavior that affect what is reported
- Manufacturer configuration tools or provisioning servers may alter default reporting settings such as transport type or server address
- Transport selection between TCP and UDP may affect delivery timing and reliability but not the fact that Plaspy accepts both on port 8888
- Validate settings such as server address, port, and transport with production devices before large scale deployment
- When in doubt, refer to the official manufacturer documentation for device specific configuration steps

## Why Protocol Understanding Matters

Understanding how the AX7 communicates helps ensure reliable setup, streamline troubleshooting, and maintain long term visibility for fleet operations. Knowing what the tracker sends and how Plaspy accepts it reduces integration time and helps diagnose common issues.

- Ensures correct server address and transport are configured so the device reports successfully to Plaspy
- Helps troubleshoot connectivity issues related to network restrictions, APN settings, or transport mismatches
- Clarifies how firmware updates or manufacturer defaults can change reporting behavior and data fields
- Assists in interpreting device status such as battery backup use, internal memory reports, and sleep mode indications
- Improves operational reliability by aligning device settings with the expectations of the Plaspy platform

## Why Use Plaspy with This Protocol

Using the ATrack AX7 with Plaspy provides a straightforward path to vehicle visibility and fleet operational oversight. The AX7's OBDII form factor simplifies installation while internal memory, backup battery, and event based tracking combine to give consistent reporting even across intermittent network conditions. Combined with Plaspy's automatic protocol detection and shared connection settings, organizations can deploy AX7 devices with minimal platform configuration.

To learn more about Plaspy and how it works with trackers like the ATrack AX7, visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and configuration instructions, verify information on the manufacturer website https://www.atrack.com.tw/ as protocol support and firmware behavior can change over time.
