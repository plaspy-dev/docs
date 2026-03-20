---
slug: /autofon/dx_mayak_81/protocol
id: dx_mayak_81-protocol
sidebar_label: Protocol
title: AutoFon - DX Mayak 8.1 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for AutoFon DX Mayak 8.1 and how it communicates with Plaspy for tracking and telemetry
keywords:
  - AutoFon DX Mayak 8.1 protocol
  - AutoFon DX Mayak 8.1 GPS tracker
  - DX Mayak 8.1 Plaspy compatibility
  - AutoFon tracker protocol
  - Plaspy device protocol
  - GPS tracking protocol
  - vehicle tracking AutoFon
  - DX Mayak tracking protocol
  - AutoFon communication protocol
  - Plaspy compatible GPS tracker
---

# AutoFon - DX Mayak 8.1 Protocol

This page provides a public protocol level overview for using the AutoFon DX Mayak 8.1 with the Plaspy tracking platform. It describes how the device communicates with a Plaspy server, what to expect from general message and telemetry flows, and which connection settings are used for reporting. The content focuses on public, non sensitive details to help administrators and integrators plan deployment and troubleshooting steps.

The DX Mayak 8.1 is Plaspy compatible out of the box and reports location and telemetry via standard GPRS reporting with SMS fallback. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact protocol behavior can vary with firmware version, hardware revision, and manufacturer implementation. Review the device documentation when you need firmware specific details.

## Protocol Overview

At a high level the DX Mayak 8.1 communicates position and telemetry to a remote monitoring endpoint using its cellular data channel, and sends event driven messages for movement, crash, and SOS events. The tracker includes telemetry such as battery level, temperature, satellite count and GSM signal in its reports so the receiving platform can present both location and device health information.

- Provides periodic and event driven reporting so Plaspy receives both routine position updates and immediate alarms.
- Sends telemetry alongside location to allow battery and signal monitoring in Plaspy.
- Uses GPRS as the primary reporting channel with SMS as a secondary control and fallback path.
- Retains unsent messages in non volatile storage and retransmits queued packets when connectivity is restored.
- Includes BLE presence and close range locating data which can be reported through the device and correlated in the Plaspy platform.

## How Plaspy Detects the Protocol

Plaspy receives messages from many device models and automatically detects the tracker protocol when a device is configured to report to the Plaspy endpoint. In most deployments the user does not need to select a protocol manually inside Plaspy provided the tracker is set to send data to the correct server address and port.

- Plaspy automatically detects the tracker protocol so manual selection is usually unnecessary.
- Configure the device to report to the Plaspy endpoint and incoming messages will be identified by the platform.
- Identification is based on the device messages arriving at the shared Plaspy endpoint so proper addressing is essential.
- If messages do not appear in Plaspy, confirm device reporting settings and network connectivity to the Plaspy server address.

## Transport and Connection Context

The DX Mayak 8.1 supports standard cellular data reporting and may be configured to use either UDP or TCP depending on the device settings and firmware. Plaspy provides a single shared endpoint for all devices which simplifies device configuration and hosting requirements.

- Devices may be configured to use UDP or TCP on port 8888 depending on device support and chosen configuration.
- Plaspy server domain is d.plaspy.com and the server IP is 54.85.159.138 for direct addressing if needed.
- The port used by Plaspy for device reporting is 8888 and all devices in Plaspy use the same port.
- Use the same Plaspy endpoint and port for configuration to allow the platform to receive and process messages.
- SMS control and fallback remain available as a secondary channel when GPRS is not reachable.

## Protocol Compatibility Notes

- Protocol behavior can differ between firmware revisions. Verify the device firmware level when checking compatibility.
- Hardware revisions or regional variants may change available reporting options or default transport settings.
- Transport selection of UDP versus TCP can affect delivery behavior in constrained networks; choose the mode that matches your deployment and device capabilities.
- Manufacturer side settings such as APN or server address configuration must be correct for messages to reach Plaspy.
- SMS fallback requires proper SIM and network provisioning and should be tested where redundancy is required.
- Consult the manufacturer documentation for any device specific configuration commands or firmware notes before wide scale deployment.

## Why Protocol Understanding Matters

Understanding how the DX Mayak 8.1 communicates helps ensure reliable reporting to Plaspy, simplifies troubleshooting, and supports long term reliability for deployed assets. Knowing the reporting channel, expected telemetry fields, and transport options reduces integration time and helps administrators respond to edge cases such as connectivity loss or firmware changes.

- Confirms that devices are pointed to the correct Plaspy endpoint and port so messages arrive reliably.
- Helps diagnose delivery issues by distinguishing between transport problems and device side configuration errors.
- Allows planning for battery life and reporting intervals that match operational needs without unexpected drain.
- Enables validation that critical alarms such as movement and SOS are transmitted and received by Plaspy.
- Supports operational decisions about whether to use UDP or TCP for a specific deployment scenario.

## Why Use Plaspy with This Protocol

Using the DX Mayak 8.1 with Plaspy gives organizations a straightforward path to receive location, event and telemetry data from a compact low power tracker. The device's long standby capability, event driven alerts, and telemetry reporting align well with Plaspy dashboards and notification workflows to provide situational awareness for fleet, asset and anti theft use cases.

To learn more about Plaspy and how it handles device communication visit https://www.plaspy.com. For the most current device level protocol details, firmware notes and manufacturer specific configuration instructions verify the official AutoFon documentation at https://www.autofon.ru/. Please note that protocol support, firmware behavior, and device implementation details can change over time so always check manufacturer resources for the latest information.
