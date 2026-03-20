---
slug: /jointech/jt709ex/protocol
id: jt709ex-protocol
sidebar_label: Protocol
title: Jointech - JT709Ex Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol notes for Jointech JT709Ex and Plaspy compatibility covering transport detection and compatibility
keywords:
  - Jointech JT709Ex protocol
  - JT709Ex Plaspy compatibility
  - Jointech smart lock protocol
  - LoRa telemetry integration
  - Fleet management integration
  - Asset security telemetry
  - Explosion proof lock
  - Remote lock monitoring
  - Vehicle tracking interoperability
  - Plaspy device compatibility
---

# Jointech - JT709Ex Protocol

This page describes the public protocol context for using the Jointech JT709Ex with Plaspy. It focuses on how the JT709Ex reports lock state, tamper alerts, and telemetry to a centralized Plaspy endpoint so those events can be correlated with GPS tracker location and fleet workflows. The information here is intended for technical integrators and fleet operators to understand the communication role of the device in a Plaspy-managed setup.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device is correctly configured to report to the platform. Exact protocol behavior for the JT709Ex can vary by firmware version, regional LoRa configuration, and manufacturer implementation, so this page provides practical, non sensitive context while encouraging verification against the official Jointech documentation.

## Protocol Overview

The JT709Ex is an explosion proof smart lock that uses low power telemetry to report events such as lock status, tamper detection, and mechanical key usage. In a Plaspy environment those telemetry messages are delivered to a central endpoint where they are associated with assets, alerts, and fleet rules. The protocol role is primarily to deliver actionable, timestamped status and alarm data rather than continuous GNSS location.

- Conveys lock state changes and tamper or dismount events to Plaspy for alerting and logging.
- Identifies the device and sends metadata so Plaspy can associate events with the correct asset or vehicle.
- Provides periodic or event driven telemetry that Plaspy can use to trigger workflows and historical records.
- Enables remote unlock and master slave coordination when routed through authorized gateways or management infrastructure.
- Supports low power operation and regional LoRa transport choices that affect reporting interval and reach.

## How Plaspy Detects the Protocol

Plaspy receives telemetry on a shared endpoint and port and uses automatic detection to recognize device report formats when they arrive. For most users the platform will identify the JT709Ex messages without manual protocol selection in Plaspy, provided the device or its LoRa gateway is configured to forward messages to the correct Plaspy endpoint.

- Plaspy server domain is d.plaspy.com and the server IP is 54.85.159.138 for endpoint configuration.
- The Plaspy listening port is 8888 and all devices in Plaspy use the same port for reporting.
- Plaspy automatically detects the tracker protocol so users typically do not need to choose a protocol inside Plaspy when the device is pointed to the Plaspy endpoint.
- Ensure network paths and gateways are forwarding JT709Ex telemetry to d.plaspy.com or 54.85.159.138 on port 8888.
- If a gateway or middleware is used for LoRa integration, confirm it relays device messages unchanged so protocol detection succeeds.

## Transport and Connection Context

The JT709Ex uses low power LoRa for long range telemetry and may rely on a gateway to forward those messages to Plaspy. Depending on how the gateway or intermediary is configured, the transport from the gateway to Plaspy can be either UDP or TCP on the standard port. Correct transport and endpoint settings are fundamental to ensure reliable delivery of lock events.

- The device may be configured using UDP or TCP on port 8888 when forwarding telemetry to Plaspy.
- Devices and gateways can point to the Plaspy server domain d.plaspy.com or directly to 54.85.159.138 as the reporting endpoint.
- All devices in Plaspy use the same port which simplifies firewall and network configuration.
- Gateways that collect LoRa uplinks must be set to forward JT709Ex messages to the Plaspy endpoint for centralized processing.
- Verify that NAT, firewalls, and any intermediary services allow outbound traffic to the Plaspy address on port 8888.

## Protocol Compatibility Notes

- Firmware versions may change message content, feature availability, or reporting behavior; always confirm the JT709Ex firmware release notes for protocol details.
- Regional LoRa configurations and frequency plans can affect reach and message timing; ensure regional compliance and gateway compatibility.
- Hardware revisions and optional accessories such as master lock pairings can add fields or event types that Plaspy will interpret as part of the device telemetry.
- Transport choice between UDP and TCP may be constrained by gateway capabilities or local network policies.
- Because JT709Ex is a lock and telemetry endpoint rather than a GNSS tracker, pair it with a GPS tracker in Plaspy where location correlation is required.
- Validate end to end behavior with a test device and refer to Jointech manufacturer documentation for device specific command and event descriptions.

## Why Protocol Understanding Matters

Understanding how the JT709Ex communicates with Plaspy helps ensure correct setup, predictable alerts, and consistent long term operation. Clear knowledge of transport, endpoint, and firmware implications reduces troubleshooting time and supports reliable integration into fleet workflows.

- Confirms server and transport settings so messages reach Plaspy without network issues.
- Helps map lock and tamper events into the correct asset and rule sets in Plaspy.
- Enables better coordination with gateway vendors or system integrators for LoRa forwarding.
- Reduces ambiguity when firmware updates change reporting behavior or add new event types.
- Supports planning for battery life and reporting intervals that affect maintenance schedules.

## Why Use Plaspy with This Protocol

Using the JT709Ex together with Plaspy provides centralized monitoring of lock status, tamper alerts, and access events alongside vehicle location and telematics. For regulated fuel transport, hazardous environments, and high value cargo, combining low power telemetry from the JT709Ex with Plaspy rules and notifications strengthens theft deterrence and operational oversight.

To learn more about Plaspy and how it manages device telemetry, visit https://www.plaspy.com. For the latest device specific protocol details, firmware behavior, and manufacturer implementation notes please verify information on the Jointech website at https://www.jointcontrols.com/ as protocol support and device behavior can change over time.
