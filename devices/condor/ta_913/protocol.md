---
slug: /condor/ta_913/protocol
id: ta_913-protocol
sidebar_label: Protocol
title: Condor - TA-913 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for Condor TA 913 and how it communicates with Plaspy for aviation tracking and messaging
keywords:
  - Condor TA-913 protocol
  - Condor TA-913 GPS
  - Condor TA-913 Plaspy compatibility
  - Condor tracker protocol
  - TA-913 communication
  - TA-913 tracking protocol
  - Plaspy compatible tracker
  - aviation GPS protocol
  - aircraft tracker protocol
  - Condor aviation tracker
---

# Condor - TA-913 Protocol

This page describes the public protocol context for using the Condor TA-913 with Plaspy. It focuses on how the device communicates with Plaspy in non sensitive terms so operators and integrators can understand how status messages, panic and POI events, and satellite text messages are delivered to a ground station and fleet management platform.

The TA-913 is an aviation focused communications and tracking device with Bluetooth gateway capabilities and user controls for crew messaging and emergency signaling. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation. Review manufacturer documentation for firmware specific details when planning deployment.

## Protocol Overview

At a high level the TA-913 reporting protocol defines how the tracker identifies itself, reports location and status, and forwards event messages to a remote server. The public protocol context covered here explains the role of that communication without exposing manufacturer internals.

- Enables transmission of status updates and event notifications from the device to a backend platform for operational use.
- Carries crew initiated inputs such as panic, POI, and ground-call events so dispatchers can react via Plaspy.
- Conveys short satellite text messages that are useful for crew to ground communications when other links are unavailable.
- Works alongside the TA-913 Bluetooth gateway so a paired smartphone or tablet can act as a user interface for message entry and control.
- Provides the essential device identification and telemetry that Plaspy ingests for mapping, alerts, and logging.

## How Plaspy Detects the Protocol

Plaspy receives reports from devices at a unified endpoint and automatically determines the appropriate protocol for processing incoming messages. In most cases users do not need to manually choose a protocol inside Plaspy if the device is configured correctly to report to the Plaspy endpoint.

- Plaspy accepts connections at the public domain d.plaspy.com and the server IP 54.85.159.138.
- All devices supported by Plaspy use the same network port for reporting to the Plaspy service.
- Plaspy automatically detects the tracker protocol when the TA-913 or other devices send data to the Plaspy endpoint.
- If the TA-913 is configured to report to the Plaspy endpoint using the shared settings, no manual protocol selection is typically required in Plaspy.
- Ensure device reporting settings match the configured transport and endpoint so Plaspy can receive and process messages reliably.

## Transport and Connection Context

Connection transport and addressing are part of the public configuration context that determines how the TA-913 reaches Plaspy. Devices may be set to use either UDP or TCP and should be pointed to Plaspy using the shared endpoint and port below.

- The TA-913 may be configured to use UDP or TCP on port 8888 depending on device support and site configuration.
- Devices can be directed to the Plaspy domain d.plaspy.com or to the server IP 54.85.159.138.
- Plaspy listens on a single port for all supported devices which simplifies device-side configuration.
- Choose the transport protocol supported by the device and compliant with any local network policies for best reliability.
- Confirm connectivity from the device to the Plaspy endpoint and that any intermediate firewalls or NAT rules allow the chosen transport.

## Protocol Compatibility Notes

- Firmware revisions can alter message content, timing, or available features. Verify compatibility against the device firmware in use.
- Hardware revisions or model variants sometimes change supported transports or optional interfaces such as Bluetooth gateway behavior.
- Manufacturer side settings and default endpoints may differ by region or firmware, so confirm the device is configured to report to the Plaspy endpoint.
- Transport selection UDP or TCP can affect delivery characteristics and should match device capability and network requirements.
- Plaspy automatic protocol detection helps reduce manual configuration but does not replace verifying that the device is pointed to the correct endpoint and port.
- When in doubt consult Condor documentation to confirm the behavior of specific firmware builds or hardware batches.

## Why Protocol Understanding Matters

Understanding how the TA-913 communicates helps ensure successful setup, reliable message delivery, and effective troubleshooting when integrating with Plaspy. Clear knowledge of transport, endpoint, and device behavior reduces integration time and improves operational confidence.

- Helps validate that the TA-913 is successfully reaching the Plaspy endpoint and that events appear in dashboards.
- Simplifies troubleshooting of missing or delayed messages by narrowing the focus to transport, DNS, and device configuration.
- Ensures emergency events like panic and POI are delivered and mapped correctly for operational response.
- Supports planning for network rules and firewall configurations to allow UDP or TCP traffic to Plaspy.
- Aids in documenting fleet deployments so firmware differences and hardware revisions are tracked against expected behavior.

## Why Use Plaspy with This Protocol

Using the Condor TA-913 with Plaspy provides a cohesive operational view for aviation fleets that require resilient messaging, crew initiated events, and centralized logging. Plaspy ingests the TA-913’s status and event messages to present alerts, message logs, and mapped positions that support safety and mission workflows.

Plaspy reduces configuration complexity by using a consistent endpoint and port and by automatically detecting the tracker protocol when a device reports to the Plaspy service. To learn more about Plaspy and how it supports devices like the Condor TA-913 visit https://www.plaspy.com. Protocol support, firmware behavior, and device implementation details can change over time so verify the latest device specific information on the manufacturer site https://condorskyseeker.com/ before finalizing deployments.
