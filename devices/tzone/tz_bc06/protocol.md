---
slug: /tzone/tz_bc06/protocol
id: tz_bc06-protocol
sidebar_label: Protocol
title: TZone - TZ-BC06 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for integrating the TZone TZ BC06 tracker with Plaspy platform
keywords:
  - TZone TZ BC06 protocol
  - TZ BC06 GPS protocol
  - TZone iBeacon tracker
  - TZ BC06 Plaspy compatibility
  - TZone Bluetooth tracker protocol
  - TZ BC06 communication protocol
  - TZone tracking protocol
  - Plaspy device integration
  - Bluetooth proximity reporting
  - Tracker protocol overview
---

# TZone - TZ-BC06 Protocol

This page covers the public protocol context for using the TZone TZ-BC06 tracker with Plaspy. It explains, at a high level, how the device can communicate with the Plaspy platform and what to consider when connecting the tracker so that its location and status become usable in Plaspy without exposing private implementation details.

The TZ-BC06 is a compact Bluetooth based tracker marketed with GPS tracking capabilities and uses the iPhone iBeacon protocol on Bluetooth 4.0 for proximity broadcasts. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol. Exact protocol behavior can vary by firmware version, hardware revision, or manufacturer implementation, so final setup can differ between units.

## Protocol Overview

The protocol used by the TZ-BC06 describes how the device identifies itself and reports presence or location-related data to systems that collect and forward those broadcasts. For many Bluetooth beacons the data first appears locally to smartphones, gateways, or other collectors which then relay that information to cloud platforms such as Plaspy.

- iBeacon based broadcasts provide identification and proximity data that downstream systems can interpret and forward.
- The protocol enables the tracker to present a stable identifier and optional metadata so a gateway or mobile app can recognize the device.
- Reporting to Plaspy depends on an intermediary that converts local Bluetooth observations into network reports addressed to the Plaspy endpoint.
- Protocol behavior such as broadcast interval and transmit power affects detection range and battery life and is typically configurable on the device.
- Security features like password protected connections at the Bluetooth level are part of the device capabilities but do not replace secure network transport to Plaspy.

## How Plaspy Detects the Protocol

Plaspy receives device reports at a single shared endpoint and uses flow level metadata to automatically detect which tracker protocol a reporting device is using. In most cases, when a TZ-BC06 or its gateway is correctly configured to report to Plaspy, no manual protocol selection is required inside the platform.

- Plaspy server domain is d.plaspy.com and the platform also accepts reports to the mapped IP address 54.85.159.138.
- Plaspy uses port 8888 as the single intake port for device reports and all devices in Plaspy use the same port.
- Devices or gateways may be configured to use UDP or TCP on port 8888 to send reports to Plaspy.
- When a properly configured gateway or app forwards TZ-BC06 observations to Plaspy, the platform automatically detects the tracker protocol and processes incoming data.
- Users typically only need to ensure their device or forwarding gateway is pointed at the Plaspy endpoint to enable automatic detection.

## Transport and Connection Context

The TZ-BC06 itself uses Bluetooth for local broadcasts, and network transport to Plaspy is handled by a forwarding component such as a mobile app or gateway. That network transport can use standard IP protocols to reach Plaspy servers.

- The device may be used with forwarding software or hardware that points to d.plaspy.com or to the IP address 54.85.159.138.
- Network reports to Plaspy are sent on port 8888; the device or gateway may use either UDP or TCP on that port depending on its configuration.
- All devices in Plaspy use the same port, simplifying network firewall and NAT rules for device reporting.
- Transport choice (UDP vs TCP) is determined by the forwarding component and the network conditions where the device operates.
- Ensure firewalls and NAT allow outbound traffic to d.plaspy.com on port 8888 so forwarded reports reach the platform.

## Protocol Compatibility Notes

- Firmware revisions can change broadcast payload content, interval options, and supported security settings; verify firmware level when troubleshooting.
- Hardware revisions or regional variants of the TZ-BC06 may alter Bluetooth behavior or available configuration commands.
- Integration with Plaspy requires a forwarding component that converts local Bluetooth observations into network reports addressed to Plaspy.
- Selecting UDP or TCP transport for forwarding affects delivery semantics; choose the transport supported by your gateway or mobile forwarding solution.
- Manufacturer configuration tools and mobile apps often expose interval and transmit power settings that influence how the tracker is detected by gateways.
- Always validate device behavior against the latest manufacturer documentation before large scale deployment.

## Why Protocol Understanding Matters

Understanding the communication protocol and how the TZ-BC06 reports data helps ensure reliable setup, effective troubleshooting, and predictable long term operation when used with Plaspy.

- Enables correct configuration of any gateway or mobile app that forwards tracker broadcasts to Plaspy.
- Helps interpret why a tracker may not appear in Plaspy due to broadcast interval settings, power level, or firmware differences.
- Guides decisions on placement and expected detection range based on transmit power and broadcasting interval.
- Simplifies firewall and network configuration by knowing that all Plaspy devices use the same port and endpoint.
- Reduces time to resolve issues by aligning device firmware and forwarding settings with Plaspy requirements.

## Why Use Plaspy with This Protocol

Using the TZ-BC06 in combination with Plaspy provides a practical path to convert local Bluetooth based proximity signals into cloud accessible tracking information. For organizations that need asset visibility, geofencing events, or presence monitoring, Plaspy accepts forwarded reports from gateways and mobile applications and processes them without requiring manual protocol selection.

If you want to learn more about Plaspy, visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and device implementation details may change over time and should be verified with the manufacturer at http://www.tzonedigital.com/ for the most current device specific information.
