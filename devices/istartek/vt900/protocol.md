---
slug: /istartek/vt900/protocol
id: vt900-protocol
sidebar_label: Protocol
title: iStartek - VT900 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for integrating the iStartek VT900 GPS tracker with Plaspy using shared connection settings and automatic detection
keywords:
  - iStartek VT900 protocol
  - iStartek VT900 GPS protocol
  - iStartek VT900 communication protocol
  - VT900 tracker Plaspy compatibility
  - iStartek tracker protocol
  - VT900 GPS tracker protocol
  - vehicle tracking iStartek VT900
  - VT900 GPRS SMS tracking
  - Plaspy device compatibility
  - Plaspy GPS protocol
---

# iStartek - VT900 Protocol

This page provides public protocol context for using the iStartek VT900 tracker with Plaspy. It explains how the tracker generally communicates with Plaspy, highlights the connection settings that Plaspy exposes publicly, and describes the role of the tracker reporting protocol in successful integration without exposing firmware internals or private implementation details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when devices are correctly configured to report to the Plaspy endpoint. Exact packet and command behavior can vary by firmware version, hardware revision, and manufacturer implementation, so behavior observed on a given VT900 may differ from other units or firmware levels.

## Protocol Overview

The VT900 communicates location, alarm, and input state information to a backend server using the device reporting protocol supported by iStartek devices. That protocol defines how the tracker identifies itself, reports telemetry such as GPS fix and sensor inputs, and delivers alarm events so a platform like Plaspy can parse and present usable data.

- Enables the VT900 to send periodic location updates and on demand reports for real time monitoring
- Carries alarm and sensor events such as SOS, tremble sensor triggers, geo fence alerts, and low battery notifications
- Conveys status of external interfaces including digital inputs, analog input, and output activation for downstream systems
- Allows the tracker to upload stored logs from internal memory when connectivity is available
- Serves as the bridge between device capabilities like SMS or GPRS transport and the Plaspy platform for consistent monitoring

## How Plaspy Detects the Protocol

Plaspy receives incoming connections on a shared endpoint and port and applies automatic detection to identify the tracker reporting protocol. When a VT900 is configured to report to Plaspy, the platform can normally detect the correct protocol without a manual protocol selection in the Plaspy interface.

- Plaspy exposes a single public server endpoint for device reporting at d.plaspy.com
- The Plaspy server IP address publicly available is 54.85.159.138 and the platform listens on port 8888
- All devices in Plaspy use the same port which simplifies configuration across different tracker brands and models
- Plaspy automatically detects the tracker protocol provided the device is pointed to the Plaspy endpoint and uses a supported transport
- In most cases users only need to set the tracker reporting address and transport on the VT900 and Plaspy will handle protocol detection

## Transport and Connection Context

The VT900 supports multiple transport options for reporting, and the connection context determines how the device reaches the Plaspy endpoint. Devices can be configured to use UDP or TCP depending on device firmware and chosen settings, and either transport is supported by Plaspy on the shared port.

- The VT900 may be configured to send data over UDP or TCP on port 8888 depending on device support and configuration
- Devices can point to the Plaspy reporting host using the domain d.plaspy.com or the server IP 54.85.159.138
- Plaspy listens on port 8888 for all device traffic so a consistent outbound destination simplifies deployment
- Choosing UDP or TCP may affect delivery behavior and should match the configuration options available on the VT900 unit
- Ensure device network settings such as APN and GPRS registration are correct so the tracker can reach the Plaspy endpoint

## Protocol Compatibility Notes

- Firmware version differences on the VT900 can change available reporting features and the exact behavior of alarms and inputs
- Hardware revisions or option packs may add or change supported sensors and interfaces that the protocol conveys
- Manufacturer configuration options such as transport choice and reporting interval influence how data arrives at Plaspy
- Network conditions and carrier behavior can affect timely delivery of SMS or GPRS reports from the device
- Validate compatibility by confirming the device is pointed to d.plaspy.com or 54.85.159.138 on port 8888 and testing reporting behavior
- Consult the device configuration menus and manufacturer documentation when specific behavior differs from expectations

## Why Protocol Understanding Matters

Understanding the VT900 communication protocol helps ensure reliable tracking, accurate alarms, and predictable integration with Plaspy. Even without diving into packet formats, knowing how the protocol relates to features such as logging, inputs, and alarm delivery improves setup and troubleshooting.

- Helps verify that the VT900 is reporting the correct identifiers so Plaspy can match telemetry to the right asset
- Guides tuning of reporting intervals and transport selection to balance data timeliness and cellular cost
- Makes it easier to troubleshoot missing events such as SOS alerts or movement triggers from the tremble sensor
- Informs expectations about internal logging behavior and how stored data is uploaded when connectivity is restored
- Aids mapping of device inputs and outputs to corresponding fields in Plaspy for accurate monitoring

## Why Use Plaspy with This Protocol

Using the iStartek VT900 with Plaspy gives organizations a straightforward path to vehicle and asset visibility by leveraging the device reporting capabilities the VT900 exposes. Plaspy accepts reports sent to its shared endpoint, detects the tracker protocol automatically, and presents location and event data for monitoring, alerts, and operational oversight.

Plaspy simplifies fleet integration by using a single listening port and automated protocol detection, reducing the configuration steps required on each VT900. To learn more about how Plaspy can work with the VT900 and other devices, visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and configuration instructions consult the manufacturer at https://istartek.com/. Protocol support, firmware behavior, and device implementation details can change over time so verify the latest information on the manufacturer website.
