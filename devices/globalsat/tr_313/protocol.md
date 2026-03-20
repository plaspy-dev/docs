---
slug: /globalsat/tr_313/protocol
id: tr_313-protocol
sidebar_label: Protocol
title: GlobalSat - TR-313 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for GlobalSat TR-313 and how it communicates with Plaspy for reliable GPS tracking
keywords:
  - GlobalSat TR-313
  - GlobalSat TR-313 protocol
  - TR-313 GPS protocol
  - TR-313 Plaspy compatibility
  - GlobalSat GPS tracker
  - personal GPS tracker protocol
  - tracking protocol Plaspy
  - GPS device integration
  - tracker communication protocol
  - fleet tracking compatibility
---

# GlobalSat - TR-313 Protocol

This page summarizes the public protocol context for using the GlobalSat TR-313 with Plaspy. It focuses on how the tracker communicates with Plaspy in general terms, the transport context for data reporting, and practical compatibility considerations while avoiding firmware specific internals.

The GlobalSat TR-313 is a compact 3G personal tracker with a fast acquisition GPS module, two way audio, and an emergency button. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the Plaspy endpoint. Exact protocol behaviour can vary by firmware version, hardware revision, and manufacturer implementation, so this page describes public, high level protocol context rather than device internals.

## Protocol Overview

The TR-313 reporting protocol is the set of rules the tracker uses to send location, status, and alert information to a server. For Plaspy integration, the protocol enables the device to identify itself, deliver position and event data, and allow device status monitoring without requiring users to manage low level parsing details.

- Enables the TR-313 to send GPS positions and event reports that Plaspy can interpret and display.
- Carries identification and status information so Plaspy can associate messages with the correct device record.
- Transports emergency alerts and event flags that support timely notifications and automated workflows.
- Supports two way status reporting so monitoring and alerting features work alongside the device hardware capabilities.
- Operates over a network transport to reach the Plaspy endpoint where automatic protocol detection occurs.

## How Plaspy Detects the Protocol

Plaspy receives tracker reports on a single shared endpoint and automatically identifies the tracker protocol so most users do not need to select a protocol manually. When the TR-313 is configured to report to the Plaspy endpoint, the platform uses that incoming data to determine how to parse and process messages for tracking and alerts.

- Plaspy listens on the shared server endpoint and port for all supported devices.
- When the TR-313 is pointed to the Plaspy endpoint, the platform will automatically detect the protocol used.
- Typically there is no manual protocol selection inside Plaspy if the device is configured to report to the correct endpoint.
- Proper device configuration to report to Plaspy is the common prerequisite for automatic detection to succeed.
- Automatic detection allows Plaspy to support many models while keeping user setup straightforward.

## Transport and Connection Context

The TR-313 sends reports over mobile data to reach Plaspy. Devices may be configured to use either UDP or TCP depending on device firmware and configuration choices. For Plaspy operation, the platform provides a single reachable endpoint and port where the device should send its reports.

- Plaspy server domain for reporting is d.plaspy.com
- Plaspy server IP for reporting is 54.85.159.138
- Plaspy uses port 8888 for device reporting and all devices supported by Plaspy use the same port
- The TR-313 may be configured to use UDP or TCP on port 8888 depending on device capability
- Pointing the device to the Plaspy domain or the server IP is a common configuration option
- Ensure mobile network and APN settings on the TR-313 allow outbound connections to the Plaspy endpoint

## Protocol Compatibility Notes

- Firmware revisions can change message timing, optional fields, or event behavior; verify firmware level when troubleshooting.
- Hardware revisions across production runs sometimes alter supported features or default settings relevant to reporting.
- Manufacturer configuration menus may allow selecting UDP or TCP transport; choose the transport that matches your deployment needs.
- Differences in regional mobile network behavior can affect connectivity and should be considered during setup.
- Validate device reporting by confirming the TR-313 is pointed to d.plaspy.com or 54.85.159.138 and using the correct transport on port 8888.
- Consult official GlobalSat documentation for any firmware specific protocol changes or manufacturer guidance.
- Test device reporting in a controlled environment before wide deployment to confirm Plaspy receives the expected messages.

## Why Protocol Understanding Matters

Understanding how the TR-313 communicates with Plaspy helps ensure reliable tracking, timely alerts, and efficient troubleshooting when devices are deployed in the field. A clear grasp of transport and protocol behaviour reduces setup time and improves long term reliability.

- Helps diagnose why a device may not appear in Plaspy or why reports are delayed.
- Allows technicians to confirm correct domain, IP, and transport settings are used on the device.
- Supports informed decisions about using UDP versus TCP based on network characteristics.
- Reduces guesswork during firmware updates by highlighting where behavior may change.
- Improves the ability to validate emergency alert delivery and two way audio related flags.

## Why Use Plaspy with This Protocol

Using the GlobalSat TR-313 with Plaspy provides a practical way to centralize location data, manage alerts, and monitor device status for personal safety and operational oversight. Plaspy’s automatic protocol detection and shared reporting endpoint streamline integration so fleets and caregivers can focus on monitoring rather than low level protocol parsing.

If you want to learn more about how Plaspy handles device integrations and to review platform capabilities, visit https://www.plaspy.com. For the most current device protocol information, firmware notes, and manufacturer configuration details verify documentation on the GlobalSat site https://www.globalsat.com.tw/. Protocol support and firmware behavior can change over time so checking the manufacturer resources ensures you have the latest device specific guidance.
