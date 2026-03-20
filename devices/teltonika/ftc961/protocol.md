---
slug: /teltonika/ftc961/protocol
id: ftc961-protocol
sidebar_label: Protocol
title: Teltonika - FTC961 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for Teltonika FTC961 integration with Plaspy server settings and compatibility notes
keywords:
  - Teltonika FTC961 protocol
  - FTC961 Plaspy integration
  - FTC961 GPS tracker protocol
  - Teltonika tracker protocol
  - FTC961 fleet tracking
  - Plaspy tracker compatibility
  - FTC961 communication protocol
  - Teltonika FTC961 telemetry
  - fleet telematics FTC961
  - FTC961 configuration
---

# Teltonika - FTC961 Protocol

This page documents the public protocol context for using the Teltonika FTC961 with Plaspy. It explains how the device communicates with the Plaspy platform in broad, non sensitive terms, and what to consider when configuring the tracker for reliable reporting. The content focuses on connection and compatibility considerations rather than low level packet formats or proprietary internals.

The FTC961 is a rugged, Plaspy compatible LTE Cat 1 tracker designed for heavy duty applications, featuring enhanced GNSS precision, high voltage support, IP69K protection, and remote management via FOTA WEB and Teltonika tools. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact protocol behavior can vary with firmware, hardware revision, and manufacturer implementation. Always cross check device firmware and manufacturer notes when planning a deployment.

## Protocol Overview

The tracker protocol is the device level communication method that allows the FTC961 to identify itself, deliver GNSS position and telemetry, and communicate status and events to Plaspy. This page keeps the description high level and practical so you can align device configuration, transport settings, and fleet workflows with Plaspy without exposing firmware internals.

- Enables the FTC961 to report location, time, and telemetry data to the Plaspy platform for live monitoring and historical playback.
- Carries event and input/output state such as ignition, digital input triggers, and status updates that Plaspy can interpret for alerts and rules.
- Provides the addressing and session context required for the tracker to connect to Plaspy endpoint settings and maintain reporting.
- Supports telemetry and remote management features used with FOTA WEB and Teltonika configuration tools while delivering data into Plaspy.
- Allows for different transport choices and device settings that affect delivery reliability and battery consumption.

## How Plaspy Detects the Protocol

Plaspy receives device reports on a shared endpoint and automatically determines the tracker protocol so most users do not need to select a protocol manually once the device is configured to report to Plaspy. Detection is based on the incoming connection and the reporting behavior of the device rather than manual selection inside the platform.

- Plaspy central server domain for device reporting is d.plaspy.com.
- Plaspy server IP address is 54.85.159.138 and the platform listens on a common port for all devices.
- The port used by all devices in Plaspy is 8888 and Plaspy automatically detects the tracker protocol on that port.
- When a properly configured FTC961 reports to the Plaspy endpoint, the platform will identify and handle supported telemetry without manual protocol selection.
- Users should ensure the device reports to the Plaspy endpoint and that network routes or carrier restrictions allow the device to reach d.plaspy.com or the provided IP.

## Transport and Connection Context

Connection choices such as TCP or UDP and the target endpoint determine how the FTC961 delivers its reports to Plaspy. These transport details are part of device setup and may be changed via Teltonika configuration tools or manufacturer configuration services.

- The device may be configured to use UDP or TCP on port 8888 depending on device support and configuration.
- Devices can be pointed to d.plaspy.com or directly to 54.85.159.138 for reporting.
- All devices in Plaspy use the same port which simplifies fleet level configuration and firewall rules.
- TCP tends to provide reliable delivery while UDP can be used where lower overhead or specific device settings are required depending on the deployment.
- Ensure mobile carrier APN and outbound firewall rules permit traffic to the Plaspy endpoint and the selected transport protocol.

## Protocol Compatibility Notes

- Firmware versions can change reporting behavior and available command or telemetry fields; always check device firmware release notes.
- Hardware revisions may introduce differences in supported inputs, power handling, or peripheral interfaces that affect integration.
- Teltonika platform features such as FOTA WEB and configuration tools affect how you update and maintain device settings for Plaspy compatibility.
- Transport selection between TCP and UDP should match the device configuration and operational priorities for delivery reliability and data overhead.
- Some manufacturer configurations or regional variants may use different default settings; validate the device is configured to point to the Plaspy endpoint.
- When in doubt, consult Teltonika configuration guides and ensure the tracker is reachable to d.plaspy.com or 54.85.159.138 on port 8888 before large scale rollout.

## Why Protocol Understanding Matters

Understanding the communication protocol helps with setup, validation, and ongoing reliability of FTC961 devices in Plaspy. It reduces integration issues and makes troubleshooting more efficient without needing to inspect or modify proprietary internals.

- Helps confirm the device is reporting to the correct Plaspy endpoint and using the intended transport and port.
- Aids in diagnosing connectivity problems that stem from carrier APN, firewalls, or incorrect server configuration.
- Supports correct use of digital inputs and outputs so events and remote control actions are reflected in Plaspy as expected.
- Enables smarter planning for firmware updates and configuration management using Teltonika remote tools alongside Plaspy.
- Improves operational reliability by aligning device sleep and reporting intervals with platform expectations.

## Why Use Plaspy with This Protocol

Using the FTC961 with Plaspy provides a practical, scalable way to collect ruggedized GNSS and telemetry data from heavy machinery and industrial fleets. The combination of precise positioning, remote management capabilities, and Plaspy automatic protocol detection simplifies deployment and day to day fleet operations.

Plaspy centralizes device telemetry, events, and location history so fleet managers can monitor status, set alerts, and run reports across many vehicles while relying on consistent endpoint settings. To learn more about Plaspy and how it supports device integrations, visit https://www.plaspy.com. For the most current device specific protocol details, firmware behavior, and manufacturer guidance verify information with the official Teltonika documentation at https://www.teltonika-gps.com/ as implementations and firmware can change over time.
