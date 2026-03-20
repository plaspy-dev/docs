---
slug: /queclink/gl501mg/protocol
id: gl501mg-protocol
sidebar_label: Protocol
title: QuecLink - GL501MG Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for QuecLink GL501MG and how it communicates with Plaspy using shared connection settings and automatic protocol detection
keywords:
  - QuecLink GL501MG
  - QuecLink GL501MG protocol
  - GL501MG GPS tracker
  - GL501MG Plaspy compatibility
  - GL501MG communication protocol
  - Queclink GPS tracker protocol
  - GL501MG asset tracking
  - GL501MG LTE Cat M1 tracker
  - tracking protocol for GL501MG
  - Plaspy device compatibility
---

# QuecLink - GL501MG Protocol

This page describes the public protocol context for using the QuecLink GL501MG tracker with Plaspy. It focuses on how the device communicates in broad terms, how Plaspy receives and identifies reports, and what to check when configuring the tracker for reliable telemetry and location updates. The intent is to provide clear, non-sensitive protocol guidance that helps you integrate the GL501MG with Plaspy without detailing internal parser logic or proprietary packet formats.

The GL501MG is a compact, battery powered asset tracker with LTE Cat M1 and NB1 plus 2G fallback, BLE, Qi wireless charging, u‑blox GNSS, and onboard sensors for low-power unattended deployments. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol; however, exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation, so always validate device and firmware details against the manufacturer documentation when needed.

## Protocol Overview

At a high level, the GL501MG uses a device reporting protocol to send GNSS positions and onboard telemetry to a remote server. The tracker can deliver scheduled reports, motion and tamper events, and sensor readings so Plaspy can present location history, alerts, and status updates for asset monitoring workflows.

- The protocol carries location fixes and telemetry such as battery level, accelerometer motion, temperature, and light sensor states.
- Device identification and session information in each report allow Plaspy to associate messages with the correct asset and account.
- Transport options supported by the GL501MG include TCP, UDP, and SMS, enabling flexible connectivity depending on network and deployment constraints.
- The tracker can adapt reporting frequency and wake patterns for long battery life while still providing timely alerts for tamper or motion events.
- When used with Plaspy, the protocol enables geofence triggers, scheduled reports, and event alerts consumed by the platform for monitoring and operations.

## How Plaspy Detects the Protocol

Plaspy receives incoming connections on a single shared endpoint and port for all devices. When a properly configured GL501MG reports to the Plaspy endpoint, the platform automatically detects the incoming tracker protocol so users typically do not need to manually pick a protocol in Plaspy.

- Plaspy listens for device reports on the shared endpoint d.plaspy.com and on the server IP 54.85.159.138.
- All devices in Plaspy use the same port, which simplifies device configuration and onboarding across models.
- The GL501MG may be configured to send data to Plaspy over TCP or UDP on port 8888, or via SMS if supported by the deployment.
- If the device is pointed to the Plaspy endpoint and network connectivity is available, Plaspy will match incoming data to the correct protocol and asset record automatically.
- Because detection is automatic, the primary user task is ensuring the device is set to report to d.plaspy.com (or the IP) and that the chosen transport (TCP or UDP) is allowed by the network.

## Transport and Connection Context

Connection choices affect reliability and power use. The GL501MG supports multiple transports so you can tune behavior for coverage and battery life. When configuring the device, plan the transport based on network availability and the type of reports you need.

- The GL501MG may use either UDP or TCP on port 8888 depending on device support and configuration choices.
- Devices can be configured to point to the Plaspy domain d.plaspy.com or directly to the server IP 54.85.159.138 when DNS or routing constraints make that preferable.
- Port 8888 is the common, shared port Plaspy uses for all tracker models, so you do not need a model-specific port.
- UDP is often used for low overhead reporting, while TCP can be chosen when session reliability or acknowledgements are desirable, but final transport selection depends on device firmware and network policy.
- SMS transport may be available as a fallback for critical notifications or when IP connectivity is unavailable; check the device configuration and SIM/network capabilities.

## Protocol Compatibility Notes

- Firmware versions can change the exact protocol behavior or available features; verify the firmware revision if a device is not behaving as expected.
- Hardware revisions or optional accessories (magnetic case, BLE sensors) may affect available reports and telemetry fields.
- Transport selection (TCP vs UDP vs SMS) influences delivery characteristics and should be validated against your network and Plaspy account settings.
- Manufacturer-side configuration tools or provisioning steps may be required to set the server address to d.plaspy.com or 54.85.159.138 and the port to 8888.
- Some deployments may require firewall or NAT adjustments to allow outbound UDP or TCP to port 8888 from device SIMs or local network gateways.
- Always cross-check compatibility and recommended settings with the official Queclink documentation and release notes for the GL501MG.

## Why Protocol Understanding Matters

Understanding how the GL501MG communicates helps ensure reliable reporting, efficient battery use, and predictable behavior in Plaspy. Knowing the basics of transport, server endpoints, and the kinds of telemetry produced allows faster troubleshooting and smoother deployments.

- Correct server and port configuration ensures the device reaches the Plaspy ingestion endpoint without manual protocol selection.
- Choosing the appropriate transport balances reliability and power consumption for your use case.
- Awareness of firmware and hardware differences reduces surprises when features are enabled or disabled across units.
- Recognizing which telemetry fields the device provides helps map device data to Plaspy alerts and workflows.
- Proper network configuration, including APN and SIM settings, improves initial connectivity and long term reliability.

## Why Use Plaspy with This Protocol

Using the GL501MG with Plaspy provides a straightforward way to collect long‑life asset location and telemetry in a single platform. The device’s LTE Cat M1 / NB1 connectivity with 2G fallback, BLE capabilities, and onboard sensors pair well with Plaspy’s automatic protocol detection and unified ingestion endpoint to deliver monitoring, alerts, and historical tracking without manual protocol selection inside the platform.

Plaspy’s shared connection settings reduce configuration overhead: point the GL501MG to d.plaspy.com or 54.85.159.138 on port 8888 (using TCP or UDP as supported), and Plaspy will detect the tracker protocol automatically. To learn more about Plaspy and how it manages device data, visit https://www.plaspy.com. For the most current device specific protocol details, firmware behavior, and manufacturer recommendations, please verify information on the Queclink website at https://www.queclink.com/.
