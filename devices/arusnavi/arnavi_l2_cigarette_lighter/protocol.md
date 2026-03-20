---
slug: /arusnavi/arnavi_l2_cigarette_lighter/protocol
id: arnavi_l2_cigarette_lighter-protocol
sidebar_label: Protocol
title: Arusnavi - Arnavi L2 (cigarette lighter) Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the Arusnavi Arnavi L2 cigarette lighter GPS tracker and how it communicates with Plaspy for fleet tracking
keywords:
  - Arusnavi Arnavi L2 protocol
  - Arnavi L2 GPS protocol
  - Arnavi L2 Plaspy compatibility
  - Arusnavi GPS tracker protocol
  - Arnavi L2 communication protocol
  - Arnavi L2 tracking protocol
  - cigarette lighter GPS tracker
  - fleet tracking Arnavi L2
  - Plaspy device protocol
  - vehicle tracking Arnavi L2
---

# Arusnavi - Arnavi L2 (cigarette lighter) Protocol

This page describes the public protocol context for using the Arusnavi Arnavi L2 cigarette lighter GPS tracker with the Plaspy platform. It focuses on how the device communicates in general terms, what connection settings are used by Plaspy, and what matters for successful reporting and integration without exposing private implementation details.

The Arnavi L2 is a plug and play tracker that reports position, status and sensor telemetry over cellular links and supports multi GNSS and BLE sensors. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol. Exact protocol behavior can vary by firmware version, hardware revision and manufacturer implementation, so device behavior may differ between units or after firmware updates.

## Protocol Overview

The protocol used by the Arnavi L2 defines how the tracker structures and sends telemetry so a server like Plaspy can ingest it for mapping, alerts and reporting. Publicly available information from the manufacturer indicates the tracker can operate with a set of common telematics protocols and send buffered records when connectivity is restored.

- Enables the tracker to initiate or maintain a session with a remote server for periodic or event driven reporting.
- Carries identity and device status information so the platform can attribute incoming messages to the correct unit.
- Transports GNSS, sensor and I/O telemetry that Plaspy uses for location updates, geofence events and telemetry dashboards.
- Supports buffered upload behavior so records stored in the local black box are forwarded to the server after reconnection.
- May operate using one of the device supported protocol variants listed by the manufacturer including INTERNAL, EXTERNAL, USER_AG and EGTS.

## How Plaspy Detects the Protocol

Plaspy accepts incoming connections on a single shared endpoint and port for all supported devices and automatically detects the tracker protocol. In typical setups, once the Arnavi L2 is configured to report to the Plaspy endpoint, the platform identifies the device messages and begins processing them without manual protocol selection.

- Plaspy listens for device reports at the Plaspy endpoint d.plaspy.com and at the server IP 54.85.159.138 on the configured port.
- The platform uses a single port for all devices which simplifies device configuration and fleet scale deployment.
- Plaspy automatically detects the tracker protocol when reports arrive so users rarely need to pick a protocol profile manually in the platform.
- Proper device configuration and correct destination settings on the tracker are required for automatic detection to succeed.
- If a device supports multiple protocol variants, ensure the tracker is set to a variant that the manufacturer documents as compatible with third party servers.

## Transport and Connection Context

Connection choices such as UDP or TCP and the destination address determine how the Arnavi L2 reaches Plaspy. The device may be configured to use either transport depending on device firmware and configuration options; Plaspy supports both modes on the shared port.

- The device can be set to use either UDP or TCP depending on its configuration and firmware capabilities.
- Plaspy receives tracker data on port 8888 which is the common port used for all devices on the platform.
- Devices may be pointed to the Plaspy domain d.plaspy.com or directly to the numeric server address 54.85.159.138.
- Using the domain name allows standard DNS based failover and server changes without reconfiguring each device.
- Confirm the device SIM and cellular connectivity are functioning and that the tracker is allowed to open outbound connections to the Plaspy endpoint.

## Protocol Compatibility Notes

- Firmware revisions can add or change protocol variants and message content so two units with different firmware may behave differently.
- Hardware revisions or optional feature packs may expose or remove capabilities such as BLE sensor forwarding or specific I O reporting.
- Devices sometimes support multiple protocol names or formats; verify which protocol is active on the unit before troubleshooting.
- Transport layer selection matters a great deal for reliability in your environment choose UDP or TCP according to coverage and expected packet behavior.
- Manufacturer configuration tools and update mechanisms can change default server addresses or ports during provisioning.
- Always cross check device settings so that the tracker is reporting to d.plaspy.com or the Plaspy server IP and the configured port.

## Why Protocol Understanding Matters

Understanding the tracker communication protocol helps administrators set up devices correctly, interpret device behavior in Plaspy, and troubleshoot connectivity or data issues efficiently. Even with automatic detection, knowing what the device is expected to report and which transport it uses reduces deployment friction.

- Helps validate that devices are sending the expected telemetry fields such as position, ignition state and sensor values.
- Aids in diagnosing why buffered records are not arriving after connectivity is restored.
- Makes it easier to confirm that the correct transport and destination settings are in use when devices cannot reach the server.
- Supports planning for firmware updates that may change protocol behavior or available features.
- Improves integration testing when adding a new vehicle type or deploying a mixed fleet with different device models.

## Why Use Plaspy with This Protocol

Using the Arnavi L2 with Plaspy provides a compact, low effort option for organizations that need rapid deployment, portable tracking and basic sensor telemetry. The cigarette lighter form factor and BLE sensor support make this tracker practical for taxis, rental cars and other use cases that demand fast swaps between vehicles while retaining core fleet management capabilities.

Plaspy centralizes incoming data from the Arnavi L2 and presents it through maps, alerts, geofencing and historical reports so teams can act on location and behavior data. If you want to learn more about Plaspy, visit https://www.plaspy.com. For the most current protocol details, firmware notes and device specifics verify the manufacturer documentation at https://www.arusnavi.ru because protocol support and firmware behavior can change over time.
