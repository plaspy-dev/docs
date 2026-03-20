---
slug: /neomatica/adm007_ble_cl/protocol
id: adm007_ble_cl-protocol
sidebar_label: Protocol
title: Neomatica - ADM007 BLE CL Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for using the Neomatica ADM007 BLE CL tracker with Plaspy for vehicle monitoring
keywords:
  - Neomatica ADM007 BLE CL
  - ADM007 BLE CL protocol
  - Neomatica GPS tracker protocol
  - ADM007 BLE CL Plaspy compatibility
  - Neomatica vehicle tracking protocol
  - BLE sensor tracker Neomatica
  - cigarette lighter GPS tracker
  - fleet management Plaspy
  - GPRS GPS tracker compatibility
  - ADM007 BLE CL communication
---

# Neomatica - ADM007 BLE CL Protocol

This page describes the public protocol context for using the Neomatica ADM007 BLE CL car tracker with the Plaspy platform. It focuses on how the tracker communicates with Plaspy in non sensitive, implementation neutral terms, and on practical considerations for configuration, detection, and reliable reporting. The ADM007 BLE CL is a compact cigarette lighter tracker with BLE sensor support and low monthly data use, and this page explains how those device capabilities fit into Plaspy connectivity.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the Plaspy endpoint. Exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so this page stays at a public, high level while pointing out the key connection facts needed to integrate the ADM007 BLE CL with Plaspy.

## Protocol Overview

The ADM007 BLE CL uses its built in cellular modem and BLE interfaces to collect location, status, and optional sensor data, then sends that information to a remote server. The communication protocol defines how the tracker identifies itself, when it reports position and events, and how it conveys sensor and diagnostic information that Plaspy can use for monitoring and alerts.

- Device identification and session information allow the server to associate incoming data with the correct asset and account.
- Periodic and event driven location reports deliver GPS GLONASS coordinates and motion status for live tracking and history.
- BLE sensor data is forwarded as part of telemetry so additional vehicle parameters can be shown in Plaspy when sensors are paired.
- Status messages and alarm events such as jamming detection provide operational signals that Plaspy can surface to users.
- Efficient reporting behavior keeps monthly data consumption low, matching the ADM007 BLE CL design goal of minimal traffic.

## How Plaspy Detects the Protocol

Plaspy receives connections on a single, shared endpoint and port and automatically selects the appropriate protocol handler for incoming device traffic. When the ADM007 BLE CL is configured to report to the Plaspy endpoint, the platform matches incoming messages to the device and begins processing without requiring the user to pick a protocol inside Plaspy.

- Plaspy’s server endpoint is reachable at d.plaspy.com and at the public IP 54.85.159.138.
- The platform listens on port 8888 for all supported devices and uses the same shared port for every tracker type.
- Plaspy automatically detects the tracker protocol when the device reports to the endpoint so manual protocol selection is normally not required.
- Ensure the ADM007 BLE CL is configured to point to d.plaspy.com or the IP address above for reliable detection.
- Verify the device has correct APN and mobile settings so it can establish a GPRS session to report to Plaspy.

## Transport and Connection Context

The ADM007 BLE CL can be configured to use common transport modes available on cellular trackers. For Plaspy integration, the important connection details are the target host and the transport option chosen on the device. Plaspy supports both major transport methods on the shared port so you can select the one that best fits the device firmware and network conditions.

- Devices may be configured to use either UDP or TCP when sending data to port 8888.
- Configure the ADM007 BLE CL to report to the host d.plaspy.com or to the IP 54.85.159.138 depending on manufacturer guidance.
- Plaspy uses the same port 8888 for every device, simplifying server configuration on the tracker.
- Transport selection can affect delivery guarantees and behavior under poor network conditions so choose UDP or TCP per the device documentation.
- Confirm SIM, APN, and GPRS settings on the tracker so it can establish connectivity to the Plaspy endpoint.

## Protocol Compatibility Notes

- The ADM007 BLE CL is compatible with Plaspy when configured to report to the Plaspy endpoint, but compatibility depends on firmware and device configuration.
- Firmware revisions and hardware variants can introduce small differences in reporting behaviour and supported features such as BLE sensor payloads.
- Manufacturer side options such as transport mode, reporting intervals, and alarm thresholds influence how data appears in Plaspy.
- BLE sensor versions and pairing procedures may vary; confirm sensor compatibility and pairing steps before large scale deployment.
- Use the shared Plaspy port 8888 and target d.plaspy.com or 54.85.159.138 to avoid routing or endpoint mismatches.
- Always validate the installed firmware and configuration against the current Neomatica documentation for the ADM007 BLE CL.

## Why Protocol Understanding Matters

A practical understanding of the tracker communication protocol helps with successful setup, ongoing reliability, and quicker troubleshooting when devices do not appear in Plaspy or when data is missing. Knowing the connection context and what the device reports makes it easier to confirm network, power, and sensor behavior.

- Confirms the device is pointing to the correct Plaspy endpoint and port to enable automatic detection.
- Helps determine whether to use UDP or TCP for the best results on a given mobile network.
- Clarifies how BLE sensor telemetry is relayed so you can verify paired sensors are reporting.
- Informs troubleshooting steps for common issues like no data, intermittent reports, or unexpected power behavior.
- Supports planning for data usage and battery or power draw in real deployments.

## Why Use Plaspy with This Protocol

Using the Neomatica ADM007 BLE CL with Plaspy provides a straightforward path to vehicle visibility and operational oversight. The ADM007 BLE CL’s low monthly data use, BLE sensor support for additional telemetry, and compact cigarette lighter installation make it practical for fleet and individual vehicle monitoring. Plaspy’s shared endpoint approach and automatic protocol detection reduce setup friction so devices can start reporting with minimal manual configuration.

If you want to learn more about Plaspy and how it handles device connectivity, visit https://www.plaspy.com. For the most current device specific protocol notes, firmware details, and configuration instructions for the ADM007 BLE CL, please verify information on the manufacturer site https://neomatica.com/ as protocol support and firmware behavior can change over time.
