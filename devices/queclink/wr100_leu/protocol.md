---
slug: /queclink/wr100_leu/protocol
id: wr100_leu-protocol
sidebar_label: Protocol
title: QuecLink - WR100 LEU Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol context for using the QuecLink WR100 LEU gateway with Plaspy for reliable tracker data forwarding
keywords:
  - QuecLink WR100 LEU protocol
  - WR100 LEU Plaspy compatibility
  - WR100 LEU GPS protocol
  - WR100 LEU communication protocol
  - WR100 LEU tracking protocol
  - QuecLink gateway Plaspy
  - Plaspy device protocol
  - cellular gateway for GPS trackers
  - industrial LTE router telemetry
  - fleet tracking gateway
---

# QuecLink - WR100 LEU Protocol

This page describes the public protocol context for using the QuecLink WR100 LEU device as a gateway in Plaspy deployments. It focuses on how the router acts as a network backhaul for Plaspy compatible GPS trackers and how the device's communication behavior relates to Plaspy's server endpoint and detection capabilities.

The WR100 LEU is an industrial LTE Cat 4 router designed to forward telemetry, location, and event data from Plaspy compatible trackers to the cloud. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, but exact protocol behavior can vary depending on firmware version, hardware revision, and manufacturer implementation. For connectivity, Plaspy accepts device reports to d.plaspy.com (or 54.85.159.138) on port 8888 and devices may be configured to use UDP or TCP on that port.

## Protocol Overview

The protocol in this context is the set of rules the WR100 LEU and connected trackers use to deliver GPS coordinates, telemetry, and event notifications to Plaspy. As a gateway, the WR100 LEU provides secure and reliable transport for tracker messages and does not alter the public-facing reporting endpoint used by Plaspy.

- Enables reliable delivery of tracker telemetry and location data from the field to the Plaspy endpoint.
- Carries device identity and session information so Plaspy can associate incoming messages with the correct tracker record.
- Supports event and alarm forwarding so Plaspy can trigger real time alerts and rules based on tracker messages.
- Preserves transport context (TCP or UDP) and network reachability so Plaspy can receive consistent updates.
- Works alongside the router features such as VPN, firewall, and dual SIM redundancy to maintain continuous reporting.

## How Plaspy Detects the Protocol

Plaspy automatically detects the incoming tracker protocol once messages arrive at the shared server endpoint. For most deployments you do not need to select a protocol inside Plaspy when the device or gateway is configured to report to the Plaspy endpoint.

- Plaspy listens on a single, shared endpoint for all devices at d.plaspy.com and 54.85.159.138 on port 8888.
- The platform uses the characteristics of incoming messages to determine the protocol and route data into the appropriate parser.
- If the WR100 LEU forwards properly formatted tracker reports to the Plaspy endpoint, protocol detection is handled automatically.
- Users generally configure the gateway or trackers to point to Plaspy; manual protocol selection inside Plaspy is not required when reporting is correct.
- Proper device identification and stable transport help Plaspy detect and maintain the correct protocol mapping for each tracker.

## Transport and Connection Context

Connection setup and transport are important for reliable delivery of tracker data. The WR100 LEU supports multiple uplink options and can forward tracker traffic over the cellular link, WiFi, or wired Ethernet to Plaspy.

- Devices and gateways may be configured to use either UDP or TCP on port 8888 depending on device support and deployment preferences.
- Trackers and the WR100 LEU can point to the Plaspy server domain d.plaspy.com or directly to 54.85.159.138 as the reporting destination.
- Plaspy uses the same port for all supported devices, which simplifies firewall and network planning for fleets.
- When using the WR100 LEU as a gateway, ensure NAT, firewall, and port forwarding rules allow outbound traffic to the Plaspy endpoint on port 8888.
- VPN or secure tunnels provided by the router can be used in front of the Plaspy connection to add an extra layer of transport security without changing the reporting endpoint.

## Protocol Compatibility Notes

- Firmware variations on the WR100 LEU or on trackers can change available transports, message timing, or optional fields; always verify the firmware revision in use.
- Hardware revisions and optional interfaces (for example serial RS232/RS485) may affect how telemetry is collected and forwarded to Plaspy.
- Some deployments prefer TCP for reliability while others use UDP for lower latency; choose transport based on device capabilities and network conditions.
- Manufacturer configuration defaults may not point to Plaspy automatically; ensure the reporting host and port are set to d.plaspy.com or 54.85.159.138 and port 8888 as appropriate.
- Plaspy’s automatic protocol detection reduces the need for manual configuration inside the platform, but correct routing and addressing from the gateway are required.
- Validate compatibility and recommended settings against the official QuecLink documentation for model and firmware specific guidance.

## Why Protocol Understanding Matters

Knowing how the WR100 LEU forwards tracker telemetry and how Plaspy expects to receive that data helps reduce setup time and improves operational reliability. Clear protocol understanding supports quicker troubleshooting and ensures data integrity across the transport chain.

- Helps confirm that trackers and the gateway are pointed to the correct Plaspy endpoint and port.
- Makes troubleshooting network or message delivery issues faster by narrowing scope to transport, gateway, or tracker layers.
- Improves uptime by informing decisions about using TCP versus UDP, VPNs, or redundancy features like dual SIM.
- Ensures event and alarm messages are preserved end to end so Plaspy can trigger rules and notifications accurately.
- Supports predictable behavior during firmware updates or hardware changes by matching expected reporting characteristics.

## Why Use Plaspy with This Protocol

Using the QuecLink WR100 LEU as a communications gateway for Plaspy compatible trackers provides a resilient and secure path for telemetry and location data. The router’s dual SIM redundancy, VPN support, and industrial networking features help keep Plaspy feeds active in demanding fleet and remote telemetry scenarios without requiring protocol-level changes inside the platform.

If you want to learn more about how Plaspy handles device connections and automatic protocol detection, visit https://www.plaspy.com. For the most current device specific protocol details, firmware behavior, and implementation guidance for the WR100 LEU, please verify information on the manufacturer site https://www.queclink.com/ as protocol behavior and firmware capabilities can change over time.
