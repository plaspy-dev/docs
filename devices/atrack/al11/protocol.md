---
slug: /atrack/al11/protocol
id: al11-protocol
sidebar_label: Protocol
title: ATrack - AL11 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the ATrack AL11 and how it communicates with Plaspy for reliable vehicle and asset tracking
keywords:
  - ATrack AL11 protocol
  - ATrack AL11 GPS protocol
  - ATrack AL11 communication protocol
  - ATrack AL11 tracking protocol
  - ATrack AL11 Plaspy compatibility
  - Plaspy device protocol
  - AL11 4G GPS tracker
  - AL11 asset tracking
  - vehicle tracking AL11
  - AL11 IP67 tracker
---

# ATrack - AL11 Protocol

This page provides a public, high level overview of the communication context for the ATrack AL11 when used with Plaspy. It focuses on how the tracker reports data to the Plaspy platform and what to consider about transport and compatibility without exposing private implementation details. Use this as a reference for integration planning and troubleshooting alongside manufacturer resources.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the Plaspy endpoint. Exact protocol behavior for the AL11 can vary by firmware, hardware revision, and manufacturer implementation, so always verify device specific behavior against ATrack documentation and firmware release notes.

## Protocol Overview

The AL11 uses a device reporting protocol to send location, status, and sensor information from the tracker to a remote server. In practice, this protocol enables the tracker to identify itself to the server, transmit periodic and event-driven telemetry, and keep the server informed about device health and motion state.

- Provides device identification and periodic telemetry so Plaspy can associate data with the correct asset
- Transmits location updates and sensor or event data used for geolocation and status monitoring
- Supports configurable reporting intervals and event triggers as implemented by the device firmware
- Enables the server to receive status information that helps with device health monitoring and fleet visibility
- Works over standard network transports so the AL11 can report to centralized fleet servers such as Plaspy

## How Plaspy Detects the Protocol

Plaspy receives device reports on a shared endpoint and port and automatically detects the tracker protocol when data arrives. For most users, this means minimal configuration inside Plaspy is required once the AL11 is pointed to the Plaspy reporting endpoint.

- Plaspy listens for incoming device reports at the domain d.plaspy.com
- The Plaspy server IP is 54.85.159.138 and the platform accepts connections on port 8888
- All devices in Plaspy use the same port which simplifies device configuration
- Plaspy automatically detects the tracker protocol when properly formatted reports arrive at the endpoint
- If the AL11 is configured to report to d.plaspy.com or 54.85.159.138 on the correct port, manual protocol selection inside Plaspy is typically unnecessary

## Transport and Connection Context

The AL11 supports modern cellular connectivity and may use either UDP or TCP for reporting depending on device configuration and firmware. Connection transport affects how the device establishes a session with the server and how individual messages are delivered.

- The device may be configured to use UDP or TCP on port 8888 depending on device support and configuration
- Devices can be pointed to the Plaspy endpoint using the domain d.plaspy.com or the server IP 54.85.159.138
- Plaspy uses the same port 8888 for all supported devices, reducing configuration complexity across mixed fleets
- Choose transport based on device configuration and network conditions; verify the AL11 firmware options for preferred transport modes
- Ensure any intermediate firewalls or mobile network policies allow outbound UDP or TCP traffic to the Plaspy endpoint on the configured port

## Protocol Compatibility Notes

- Firmware revisions can change which messages or fields the AL11 sends; confirm compatibility for the firmware version on your units
- Hardware revisions or optional sensors may alter available telemetry such as accelerometer events or input statuses
- Manufacturer configuration parameters (for example server host, transport type, and reporting intervals) determine how the AL11 communicates with Plaspy
- Device reporting may be impacted by network coverage and cellular technology selected by the SIM card and carrier
- Always validate the device is pointed at d.plaspy.com or 54.85.159.138 on port 8888 and using the intended transport (UDP or TCP)
- When in doubt, consult ATrack documentation for model specific settings and recommended firmware

## Why Protocol Understanding Matters

Understanding how the AL11 communicates with Plaspy reduces integration friction and helps resolve common deployment issues. Knowing the basic behavior of the tracker protocol makes it easier to confirm the device is reporting correctly and to interpret the data seen inside the fleet platform.

- Helps ensure the device is correctly configured to report to the Plaspy endpoint and reach d.plaspy.com or 54.85.159.138
- Speeds up troubleshooting when telemetry is missing or inconsistent by narrowing the issue to transport, firmware, or configuration
- Improves deployment planning by aligning reporting intervals and event settings with operational requirements
- Supports reliable fleet operations by clarifying how device events and status updates translate into alerts and reports
- Provides context for firmware updates or configuration changes that may affect data visibility in Plaspy

## Why Use Plaspy with This Protocol

Using the ATrack AL11 with Plaspy gives organizations a simple path to aggregate location and event data from ruggedized 4G/3G trackers into a single fleet management platform. Plaspy's centralized endpoint and automatic protocol detection mean many AL11 units can be brought online quickly once they are configured to report to the Plaspy server.

For detailed device setup, consult your AL11 configuration guide and ensure the device is pointed to the Plaspy reporting endpoint at d.plaspy.com or the IP 54.85.159.138 using port 8888. Plaspy uses the same port for all devices and automatically detects the tracker protocol, which streamlines onboarding and reduces per device configuration.

To learn more about Plaspy and supported device workflows visit https://www.plaspy.com. For the latest manufacturer protocol details, firmware notes, and device specific configuration instructions please verify information on the ATrack website at https://www.atrack.com.tw/ as device support and firmware behavior can change over time.
