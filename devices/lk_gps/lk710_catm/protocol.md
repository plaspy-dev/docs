---
slug: /lk_gps/lk710_catm/protocol
id: lk710_catm-protocol
sidebar_label: Protocol
title: LK-GPS - LK710-CatM Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol summary for the LK710 CatM tracker and how it communicates with Plaspy servers and endpoints
keywords:
  - LK-GPS LK710-CatM protocol
  - LK710-CatM GPS protocol
  - LK-GPS tracking protocol
  - LK710-CatM Plaspy compatibility
  - Plaspy tracker protocol
  - vehicle tracking LK710-CatM
  - CatM GPS tracker Plaspy
  - LK-GPS communication protocol
  - LK710-CatM immobilizer integration
  - Plaspy device connection
---

# LK-GPS - LK710-CatM Protocol

This page summarizes the public protocol context for using the LK-GPS LK710-CatM tracker with Plaspy. It is intended to help technical users and deployers understand how the device communicates with Plaspy and what to check when configuring trackers for fleet, rental, or anti-theft deployments. The content focuses on connection and protocol behavior at a high level without exposing proprietary or sensitive implementation details.

The LK710-CatM is a compact IP68 Cat-M tracker with integrated GPS and GSM antenna, remote immobilizer controls, SMS configuration, and battery reporting. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol. Exact protocol behavior can vary depending on firmware version, hardware revision, and manufacturer implementation, so always validate device-specific behavior against the manufacturer's documentation when necessary.

## Protocol Overview

The tracker protocol is the on-device method for packaging and sending position, status, and event data from the LK710-CatM to a server. With Plaspy, the protocol enables the device to identify itself, report GPS coordinates and telemetry such as battery status, and deliver immobilizer and control events for dashboard visualization and workflows.

- Enables real-time transmission of location and telemetry to Plaspy for visualization and alerts
- Carries device identification and state information that allows Plaspy to associate data with the correct asset
- Transmits control and event messages such as immobilizer state changes and configuration acknowledgements
- Supports periodic reporting and on-demand location queries depending on device configuration
- Works over the cellular link and is independent from higher level presentation in Plaspy dashboards

## How Plaspy Detects the Protocol

Plaspy receives incoming connections on a shared endpoint and uses detection logic to determine the device protocol automatically. Because Plaspy operates a common ingestion endpoint, users typically do not need to pick a protocol in the platform when the device is correctly configured to report to the Plaspy endpoint.

- Plaspy accepts incoming device traffic on the shared endpoint d.plaspy.com and the server IP 54.85.159.138
- All devices in Plaspy use the same port and Plaspy automatically detects the tracker protocol
- When the LK710-CatM is pointed at the Plaspy endpoint, Plaspy associates the incoming stream with the account and device identity
- Proper SIM and APN configuration plus device reporting settings help ensure automatic detection succeeds
- If a device is not detected automatically, reviewing the device reporting target and transport mode is the first troubleshooting step

## Transport and Connection Context

Connection details determine how the LK710-CatM reaches Plaspy and which transport mode the tracker uses. The device may be configured to use UDP or TCP depending on device capabilities and deployment requirements. Plaspy consumes data on a single, consistent port for all supported devices to simplify configuration.

- The device may be configured using UDP or TCP on port 8888 depending on device support and settings
- Devices can point to the Plaspy hostname d.plaspy.com or the server IP 54.85.159.138 as the reporting destination
- Plaspy uses port 8888 for all devices to provide a common endpoint across device families
- Choice of UDP or TCP affects delivery semantics and retry behavior at the transport layer but not Plaspy protocol detection
- Verify APN, SIM data plan, and radio connectivity when devices fail to reach the Plaspy endpoint

## Protocol Compatibility Notes

- Firmware versions can change message timing, optional fields, and supported commands; confirm firmware release notes for LK710-CatM specific behavior
- Hardware revisions or regional variants may alter supported cellular bands or radio configuration that affect connectivity
- Manufacturer configuration options such as reporting intervals, SMS configuration, and transport selection will influence how data appears in Plaspy
- Use UDP for lower overhead reporting when supported and TCP for environments that require connection reliability based on deployment needs
- Plaspy automatically detects the tracker protocol, but correct destination settings and transport selection on the device are required for successful detection
- Always validate compatibility against the LK-GPS official documentation for the most accurate, model specific details

## Why Protocol Understanding Matters

Understanding the device protocol and connection context helps accelerate setup, reduce common misconfigurations, and support reliable long term operation when integrating LK710-CatM trackers with Plaspy. Adequate protocol knowledge also makes troubleshooting faster when connectivity or data mapping issues arise.

- Ensures device reporting settings point to the correct Plaspy endpoint and transport for automatic detection
- Helps identify whether missing data is a connectivity issue or a firmware configuration issue
- Informs decisions about reporting intervals and telemetry payloads that balance battery life and tracking fidelity
- Guides selection between UDP and TCP based on network conditions and reliability needs
- Supports clearer communication with LK-GPS support when firmware or hardware behavior requires vendor assistance

## Why Use Plaspy with This Protocol

Using the LK710-CatM with Plaspy provides organizations a straightforward path to real-time location, telemetry, and immobilizer event visibility across mobile and browser interfaces. The tracker’s compact, waterproof design and Cat-M connectivity make it well suited to mixed fleets, rental services, and micromobility deployments where discrete installation and dependable reporting are important.

Plaspy’s common ingestion endpoint simplifies device onboarding by using the same port for all supported devices and automatic protocol detection, so once the LK710-CatM is configured to report to d.plaspy.com on port 8888 (UDP or TCP), Plaspy will ingest location, battery, and control events for operational use. To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the most current device specific protocol details, firmware notes, and manufacturer guidance verify information with the official LK-GPS site at https://www.lk-gps.com.
