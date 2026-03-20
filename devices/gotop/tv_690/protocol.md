---
slug: /gotop/tv_690/protocol
id: tv_690-protocol
sidebar_label: Protocol
title: GOTOP - TV-690 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for GOTOP TV 690 compatibility with Plaspy server and connection context
keywords:
  - GOTOP TV 690 protocol
  - GOTOP TV 690 GPS protocol
  - GOTOP TV 690 Plaspy compatibility
  - TV 690 tracking protocol
  - GOTOP GPS tracker TV 690
  - TV 690 communication protocol
  - GOTOP tracker Plaspy
  - personal GPS tracker protocol
  - TV 690 SMS location
  - GPS tracker compatibility Plaspy
---

# GOTOP - TV-690 Protocol

This page summarizes the public protocol context for using the GOTOP TV-690 personal positioning device with the Plaspy platform. It focuses on how the device communicates in general terms, how Plaspy receives device reports, and what to consider when configuring and validating connectivity. Technical details that are specific to firmware revisions or private manufacturer implementations are intentionally omitted.

Plaspy uses shared connection settings across all supported trackers and is able to automatically detect the tracker protocol when the device reports to the Plaspy endpoint. For Plaspy the server domain is d.plaspy.com and the public server IP is 54.85.159.138 on port 8888. The TV-690 may be configured to report to Plaspy using UDP or TCP on port 8888. Exact message behavior can vary with firmware version, hardware revision, and manufacturer configuration, so validate device specific details with the manufacturer where needed.

## Protocol Overview

The TV-690 combines GPS positioning and GSM GPRS connectivity to deliver location and status information. When used with Plaspy, the device protocol governs how the tracker identifies itself, transmits coordinates, and delivers additional status data so that the Plaspy server can process and display the information reliably.

- Provides the rules for reporting position and time so Plaspy can map and store location events.
- Enables the tracker to identify itself with an ID or device identifier so Plaspy can associate reports with the correct asset.
- Carries status information such as movement or battery indicators in addition to raw coordinates, enabling richer platform features.
- Allows the device to use either GPRS reporting to an IP endpoint or SMS for direct location queries, with SMS being a separate capability of the TV-690.
- Supports the exchange of periodic updates and status messages that let Plaspy maintain an accurate device view.
- Ensures that Plaspy can interpret incoming data to convert it into location points and telemetry for dashboards and alerts.

## How Plaspy Detects the Protocol

Plaspy is built to accept reports on a single shared endpoint and automatically determine the incoming tracker protocol when a device sends data to that endpoint. In most cases a properly configured tracker needs only to be pointed at Plaspy and no manual protocol selection is required in the platform.

- Plaspy listens on the shared domain d.plaspy.com and the public IP 54.85.159.138.
- All devices supported by Plaspy use the same network port so configuration is simplified.
- The required port for Plaspy reporting is 8888 and devices may use UDP or TCP on that port depending on device support.
- When the TV-690 is configured to report to the Plaspy endpoint Plaspy will automatically detect the compatible protocol.
- Users typically do not need to choose a protocol inside Plaspy if the device is correctly pointed to the Plaspy server and using the expected transport.

## Transport and Connection Context

Transport options and the network endpoint are the key connection details for integrating a TV-690 with Plaspy. The TV-690 supports cellular data reporting, and the device can be set to send its reports over UDP or TCP to the Plaspy server on the shared port.

- The device may be configured to send GPRS reports to d.plaspy.com or directly to 54.85.159.138.
- Plaspy accepts connections on port 8888 for all supported devices.
- The TV-690 can be set to use either UDP or TCP on port 8888 depending on device firmware and configuration choices.
- SMS based location replies and Google Maps link responses are separate device features and are not dependent on the IP reporting transport.
- Ensure APN and mobile network settings on the tracker are correct so that GPRS reporting to the Plaspy endpoint is possible.

## Protocol Compatibility Notes

- Firmware revisions can change the exact message behavior delivered by the TV-690, so verify the firmware version when troubleshooting.
- Hardware revisions or optional configuration menus on the device can alter available transport modes or reporting intervals.
- SMS based features such as Google Maps links are a device capability and operate independently of IP reporting to Plaspy.
- Choosing UDP or TCP on the device can affect delivery characteristics depending on mobile network behavior and device firmware.
- Confirm device APN and mobile network allowances with your SIM provider to ensure GPRS reporting is possible.
- Always check the manufacturer documentation for model specific configuration steps and any changes introduced in recent firmware releases.

## Why Protocol Understanding Matters

Understanding how the TV-690 communicates helps ensure successful setup and reliable operation with Plaspy. A practical awareness of protocol behavior reduces integration friction and speeds troubleshooting when connectivity or data interpretation issues arise.

- Makes it easier to configure the device to report to d.plaspy.com or 54.85.159.138 on port 8888 using the correct transport.
- Helps diagnose why a device may not appear in Plaspy by checking firmware, APN, and transport selection.
- Clarifies the difference between SMS location replies and GPRS based reporting to the Plaspy server.
- Supports planning for battery and reporting interval trade offs based on how often the device transmits data.
- Aids coordination with the device manufacturer when firmware or hardware differences are suspected.

## Why Use Plaspy with This Protocol

Using the GOTOP TV-690 with Plaspy provides a straightforward way to centralize location and status data from personal trackers into a single platform for monitoring and operational oversight. For organizations and families that need visibility over assets or people, integrating the TV-690 with Plaspy combines the device s compact GPS and GSM capabilities with Plaspy s server side processing and mapping.

To learn more about Plaspy and how it works with devices such as the GOTOP TV-690 visit https://www.plaspy.com. For the most current firmware details implementation notes and device specific configuration instructions confirm the latest information on the manufacturer website https://www.gotop.cc/ since protocol support and firmware behavior can change over time.
