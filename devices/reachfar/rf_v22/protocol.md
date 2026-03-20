---
slug: /reachfar/rf_v22/protocol
id: rf_v22-protocol
sidebar_label: Protocol
title: Reachfar - RF-V22 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for Reachfar RF-V22 door alarm and how it communicates with Plaspy for reliable event reporting and monitoring
keywords:
  - Reachfar RF-V22 protocol
  - RF-V22 Plaspy compatibility
  - Reachfar door alarm protocol
  - RF-V22 communication protocol
  - RF-V22 tracking protocol
  - Plaspy device integration
  - GSM GPRS door sensor protocol
  - Reachfar telemetry integration
  - Plaspy protocol detection
  - Cellular door alarm protocol
---

# Reachfar - RF-V22 Protocol

This page describes the public protocol context for using the Reachfar RF-V22 Telecom Smart Door Alarm with Plaspy. It focuses on how the device reports door open and close events over GSM GPRS to a Plaspy endpoint and what integrators and administrators should understand about that communication for successful monitoring and alerting.

The RF-V22 is a cellular door status detector with IP67 protection designed for supervised entry control in healthcare, quarantine, assisted living, and similar environments. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact device behavior can vary by firmware, hardware revision, and manufacturer implementation. The guidance below is intended to explain connection and protocol concepts in public terms without diving into firmware internals.

## Protocol Overview

The RF-V22 communicates door state and alarm events over cellular networks to a remote monitoring service. In the context of Plaspy, the device sends telemetry to Plaspy endpoints where those events are converted into alerts, log entries, and automation triggers. Understanding this end to end helps ensure the unit reports reliably and that Plaspy presents meaningful data to operators.

- The protocol governs how the RF-V22 packages and transmits door open and close events to a remote endpoint.
- Reporting enables Plaspy to correlate door state with other telemetry for automated workflows and incident response.
- The device protocol must allow the unit to identify itself so Plaspy can associate events with the correct asset and configuration.
- Reliable transport and retry behavior at the device level are important for near real time event delivery in cellular environments.
- Protocol-level timestamps and event identifiers help Plaspy record accurate logs and histories for compliance and auditing.

## How Plaspy Detects the Protocol

Plaspy provides a common server endpoint that RF-V22 devices can report to. When a properly configured device sends telemetry to that endpoint, Plaspy automatically detects the tracker protocol and handles the incoming events without manual protocol selection in most cases. This automatic detection simplifies onboarding and reduces the risk of configuration errors.

- Devices should be pointed to the Plaspy endpoint at d.plaspy.com or the server IP 54.85.159.138.
- All devices that report to Plaspy use the same port for incoming telemetry which simplifies device configuration.
- Plaspy listens on port 8888 and can accept device reports over either UDP or TCP depending on device support and setup.
- When the RF-V22 is sending events to the Plaspy endpoint, the platform associates those events with the correct device record and applies configured alerting rules.
- Typical installations do not require users to manually select a protocol in Plaspy once the device is correctly configured to report to the Plaspy endpoint.

## Transport and Connection Context

Connection choices at the device level determine how messages reach Plaspy. The RF-V22 uses GSM GPRS to reach the public network and can be configured to send telemetry over UDP or TCP. Understanding the transport options and where to point the device is essential for a successful integration.

- Devices may be configured to use UDP or TCP on port 8888 to send telemetry to Plaspy.
- The Plaspy server can be referenced by domain name at d.plaspy.com or by IP address at 54.85.159.138.
- Plaspy uses the same port 8888 for all supported devices to simplify network configuration and firewall rules.
- Choose UDP for lower overhead and potentially faster delivery in simple event reporting setups, or TCP for connection oriented delivery if the device and network prefer it.
- Confirm that cellular carrier or local firewall policies permit outbound connections to the Plaspy endpoint and port.

## Protocol Compatibility Notes

- Firmware differences across RF-V22 units can change message timing, fields included in reports, or retry behavior. Verify firmware release notes when troubleshooting.
- Hardware revisions or accessory options may affect available telemetry or power behavior even though the basic door reporting function is consistent.
- Transport selection between UDP and TCP is device configurable and may require matching configuration on the device to the intended Plaspy listener behavior.
- Because the RF-V22 is a cellular door alarm rather than a GPS tracker, GNSS fields are not applicable and will not be present in telemetry.
- Manufacturer documentation and installation guides should be consulted to confirm exact configuration steps for pointing the device at the Plaspy endpoint.
- Test devices in your target deployment environment to validate cellular coverage, event timing, and Plaspy association before large scale rollouts.

## Why Protocol Understanding Matters

A clear grasp of the RF-V22 communication protocol and connection context reduces onboarding friction and improves operational reliability. Knowing how the device reports events and how Plaspy receives and interprets those events helps teams configure alerts, maintain compliance records, and troubleshoot connectivity issues efficiently.

- It shortens time to first successful event on Plaspy by ensuring the device is pointed to the correct endpoint and port.
- It enables accurate mapping of device identifiers in Plaspy so events are attached to the right asset and location.
- It helps diagnose event loss or delays by focusing checks on transport, carrier connectivity, and firmware retry behavior.
- It supports designing automation rules in Plaspy that respond correctly to door open and close events.
- It clarifies expectations for data retention, timestamps, and audit logs in operational and compliance workflows.

## Why Use Plaspy with This Protocol

Using the RF-V22 with Plaspy gives organizations a centralized place to receive door open and close events alongside other telemetry. This can be valuable for facilities requiring supervised access control, for healthcare environments monitoring patient safety, and for operations that benefit from correlating access events with other asset data managed in Plaspy.

Plaspy makes it straightforward to receive and act on RF-V22 events by providing a shared endpoint and automatic protocol detection. To learn more about Plaspy and how it handles device integration visit https://www.plaspy.com. For the most current device specific protocol and firmware details verify information with the manufacturer at https://www.reachfargps.com/ since protocol support and firmware behavior can change over time.
