---
slug: /lk_gps/lk970/protocol
id: lk970-protocol
sidebar_label: Protocol
title: LK-GPS - LK970 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the LK GPS LK970 tracker and how it communicates with Plaspy for reliable vehicle and asset tracking
keywords:
  - LK GPS LK970 protocol
  - LK970 GPS tracker protocol
  - LK970 Plaspy compatibility
  - Plaspy LK970 communication
  - GPS tracker LK970 integration
  - LK970 tracking protocol overview
  - vehicle tracking LK970 Plaspy
  - LK970 SMS platform query
  - LK970 4G tracker protocol
  - LK970 firmware protocol notes
---

# LK-GPS - LK970 Protocol

This page describes the public protocol context for using the LK-GPS LK970 tracker with the Plaspy platform. It focuses on high level communication behavior, connection settings Plaspy expects, and practical considerations for integrating the LK970 into a Plaspy deployment without exposing firmware internals or private implementation details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. Exact device behavior can vary by firmware version, hardware revision, and manufacturer implementation, so this page is intended as general guidance rather than a replacement for manufacturer documentation.

## Protocol Overview

The tracker reporting protocol governs how the LK970 sends location updates, status, and alarm information to a remote server and how server responses or acknowledgements are handled at a high level. For Plaspy integration, the protocol enables the tracker to identify itself, report usable GPS and telematics data, and deliver event notifications that Plaspy can present to users.

- Establishes a server destination and transport for regular location reporting and event messages
- Provides device identification so the platform can map incoming data to a specific LK970 unit
- Delivers position, movement, and alarm information that Plaspy converts into location and status records
- Supports supplementary methods such as SMS platform queries in addition to IP reporting when available
- May include configurable reporting intervals and event triggers controlled by device settings or SMS commands

## How Plaspy Detects the Protocol

Plaspy listens on a single shared endpoint and port for all supported trackers, so when an LK970 is configured to report correctly to Plaspy the platform will detect the device protocol automatically. In most cases the user does not need to select a specific protocol inside Plaspy if the tracker is pointed at the Plaspy endpoint and using an expected transport.

- Plaspy uses a single server domain d.plaspy.com for device reporting
- The Plaspy server IP is 54.85.159.138 and the service port is 8888
- Plaspy automatically detects the tracker protocol from incoming reports without manual protocol selection
- Users typically only need to configure the LK970 to report to the Plaspy endpoint to enable detection
- Because Plaspy uses a shared port across devices, consistent transport and destination settings are important for discovery

## Transport and Connection Context

Connection transport and addressing determine how the LK970 reaches Plaspy and how reliably messages are delivered. The LK970 can be set to use packet based transports supported by the device and network, and these settings directly affect delivery characteristics such as latency and reliability.

- The LK970 may be configured to use UDP or TCP on port 8888 depending on device support and carrier network behavior
- Devices may be pointed to the Plaspy domain d.plaspy.com or to the IP address 54.85.159.138
- Plaspy uses the same port, 8888, for all supported devices to simplify endpoint configuration
- Choice of UDP or TCP can affect retransmission and session behavior but both are accepted by Plaspy on the shared port
- Ensure APN and network settings on the LK970 allow 4G data connections to the configured Plaspy endpoint

## Protocol Compatibility Notes

- The LK970 is compatible with Plaspy when configured to report to the Plaspy endpoint and transport settings are correct
- Firmware revisions can change reporting behavior or available commands; confirm firmware details when troubleshooting
- Hardware variants and model revisions labeled A B or C may have small differences in supported bands or power management that affect reporting
- Selecting UDP versus TCP on the device may be necessary based on carrier performance and network conditions
- SMS platform queries are commonly supported by the LK970 and can be used as a fallback or configuration method where supported
- Always validate device settings and capabilities against official manufacturer documentation for your specific unit

## Why Protocol Understanding Matters

Understanding the communication protocol helps ensure the LK970 reliably reports position and event data to Plaspy, aids troubleshooting, and supports long term reliability for fleet and asset tracking deployments.

- Proper device addressing and transport selection prevents lost or misrouted reports
- Knowing how the tracker identifies itself helps Plaspy map incoming packets to the correct asset record
- Awareness of firmware and hardware variation reduces time spent chasing intermittent issues
- Understanding available reporting modes such as real time updates or SMS queries helps design operational workflows
- Clear expectations about reporting behavior accelerate setup and reduce support overhead

## Why Use Plaspy with This Protocol

Using the LK-GPS LK970 with Plaspy provides organizations and individual users with a straightforward way to centralize real time location, alarms, and historical tracking data for vehicles, motorcycles, or handheld assets. Plaspy’s automatic protocol detection and single shared endpoint simplify device onboarding so units that are correctly pointed to the Plaspy endpoint can begin reporting without complex per device configuration inside the platform.

To learn more about Plaspy and how it handles device connections and telematics data, visit https://www.plaspy.com. For the most current and device specific protocol details, firmware notes, and configuration instructions for the LK970 consult the manufacturer documentation at https://www.lk-gps.com. Protocol support and firmware behavior can change over time so verifying the latest manufacturer resources is recommended.
