---
slug: /hunterpro/cp60_kam/protocol
id: cp60_kam-protocol
sidebar_label: Protocol
title: HunterPro - CP60-KAM Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol summary for HunterPro CP60 KAM integration with Plaspy and guidance on connection and compatibility
keywords:
  - HunterPro CP60-KAM protocol
  - HunterPro CP60-KAM GPS protocol
  - CP60-KAM Plaspy compatibility
  - HunterPro tracking protocol
  - CP60-KAM device protocol
  - Plaspy device support
  - HunterPro camera tracker
  - vehicle tracking protocol
  - fleet GPS protocol
  - tracker communication Plaspy
---

# HunterPro - CP60-KAM Protocol

This page provides a public, non sensitive overview of the communication protocol context for using the HunterPro CP60-KAM tracker with Plaspy. It explains how the device interacts with the Plaspy platform at a high level, what to expect during integration, and which connection settings are used by Plaspy for receiving reports from supported trackers.

The HunterPro CP60-KAM is notable for combining standard GPS tracking with onboard image capture features such as automatic image capture on a Panic Event. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, while exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation.

## Protocol Overview

The protocol is the device side communication method that allows the CP60-KAM to report location, status, and event signals to a remote server such as Plaspy. At a general level, the protocol organizes how the tracker identifies itself, reports telemetry, and signals events that may include image capture triggers or other sensor data.

- Enables the tracker to send positional updates and event notifications to Plaspy for real time monitoring.
- Conveys device identity and session information so Plaspy can associate incoming reports with the correct unit.
- Carries event signals that can indicate panic activations, and in the CP60-KAM case may be associated with image capture behavior depending on firmware.
- Provides the mechanism for remote command acknowledgement and configuration when supported by the device.
- Serves as the bridge between the tracker hardware and Plaspy so reported data becomes usable telemetry and alerts.

## How Plaspy Detects the Protocol

Plaspy receives tracker reports at a shared network endpoint and automatically determines which tracker protocol is being used. In most integrations the user does not need to manually select a protocol inside Plaspy if the device is correctly configured to report to the Plaspy endpoint.

- Plaspy listens on the shared domain d.plaspy.com and the public IP 54.85.159.138 for incoming device reports.
- All devices supported by Plaspy use the same port, simplifying device configuration and firewall rules.
- Plaspy accepts device connections on port 8888 and will detect the protocol used by the tracker automatically.
- Typical setup requires configuring the tracker to report to d.plaspy.com or the provided IP and to use port 8888 with the preferred transport.
- Because protocol behavior can vary by firmware or hardware revision, automatic detection reduces the need for manual protocol selection.

## Transport and Connection Context

Connection transport and endpoint configuration are essential to establish reliable data flow from the CP60-KAM to Plaspy. The tracker can be set to use either UDP or TCP on the standard Plaspy port depending on device capabilities and the selected configuration.

- Devices may be configured to point to the domain d.plaspy.com or to the IP address 54.85.159.138 when directing reports to Plaspy.
- Plaspy accepts both UDP and TCP transports on port 8888 to accommodate device preferences and network conditions.
- All Plaspy supported devices use the same port 8888, so the port setting is consistent across device types.
- Use the transport option (UDP or TCP) that best matches the tracker firmware and your network reliability requirements.
- Ensure network firewalls and NAT rules allow outbound connections to d.plaspy.com or 54.85.159.138 on port 8888.

## Protocol Compatibility Notes

- Firmware versions can change message behavior and available features; verify device firmware when validating compatibility.
- Hardware revisions may introduce small differences in supported features such as image capture triggers or event fields.
- Manufacturer side configuration options can affect whether media or extended event data are transmitted to the server.
- Transport selection (UDP versus TCP) can influence reliability and how retransmissions or session handling occur.
- Plaspy’s automatic detection helps in most cases, but accurate device reporting to the Plaspy endpoint is required for success.
- Always validate important behavior, such as panic image capture, against the official HunterPro documentation and current firmware notes.

## Why Protocol Understanding Matters

Understanding the CP60-KAM communication protocol helps administrators and integrators verify correct device setup, troubleshoot connectivity issues, and confirm that critical events are transmitted as expected. A clear view of the protocol role reduces integration time and supports long term reliability.

- Ensures devices are pointed to the correct Plaspy endpoint and transport so data reaches the platform.
- Helps diagnose why telemetry or events are not appearing in Plaspy by checking network and device settings.
- Supports planning for firmware updates that may change reporting behavior or add new event fields.
- Aids in confirming that panic events and related image capture features are behaving as intended.
- Facilitates coordination with manufacturer documentation for device specific configuration steps.

## Why Use Plaspy with This Protocol

Using the HunterPro CP60-KAM with Plaspy provides organizations with consolidated visibility into vehicle locations, event alerts, and the added context of image capture where available. For fleet operators and security teams, the combination of GPS telemetry and event driven image evidence can improve situational awareness and post event analysis.

Plaspy makes it straightforward to bring CP60-KAM devices online by using a single endpoint and port (d.plaspy.com or 54.85.159.138 on port 8888) and by automatically detecting the tracker protocol once the device is correctly configured. To learn more about how Plaspy can work with your devices visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and manufacturer implementation details can change over time; verify the latest device specific information on the HunterPro website at http://hunterpro.com.tw/.
