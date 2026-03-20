---
slug: /topfly/pioneerx_100/protocol
id: pioneerx_100-protocol
sidebar_label: Protocol
title: TopFly - PioneerX 100 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol notes for TopFly PioneerX 100 integration with Plaspy using shared server settings and automatic protocol detection
keywords:
  - TopFly PioneerX 100 protocol
  - TopFly PioneerX 100 GPS protocol
  - PioneerX 100 communication protocol
  - PioneerX 100 tracking protocol
  - TopFly tracker Plaspy compatibility
  - PioneerX 100 telemetry protocol
  - TopFly GPS tracker protocol guide
  - PioneerX 100 fleet tracking protocol
  - TopFly Plaspy integration
  - PioneerX 100 device protocol
---

# TopFly - PioneerX 100 Protocol

This page covers the public protocol context for using the TopFly PioneerX 100 tracker with Plaspy. It summarizes how the device communicates in broad, non sensitive terms, and focuses on the connection and reporting behavior relevant to integrating the tracker with Plaspy for real time location, events and telemetry.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when a device reports to the platform. Exact protocol behavior and available features can vary by firmware version, hardware revision and manufacturer implementation, so this page highlights the general communication patterns rather than firmware specific packet details.

## Protocol Overview

The PioneerX 100 communicates position, event and sensor telemetry to backend servers so fleet operators can monitor vehicles, trigger alerts and replay historical trails. The protocol carried over the device transport is responsible for identifying the unit, reporting GNSS data and transmitting I O and sensor events that Plaspy converts into usable map positions and telemetry records.

- The protocol conveys GNSS fixes and timestamps so Plaspy can place the unit on the map and archive position history.
- Telemetry items such as ignition state, analog sensor readings and BLE sensor data are reported as events for alerts and reporting.
- The tracker reports buffered positions after connectivity is restored so historical trails remain intact for Plaspy playback.
- The communication protocol also carries event triggers like SOS, door or immobilizer alerts for immediate processing.
- Security and encryption options available in the device can be negotiated at configuration and influence how Plaspy receives and validates reported data.

## How Plaspy Detects the Protocol

Plaspy inspects incoming connections at the shared endpoint and determines how to interpret messages based on the data the tracker sends. Because Plaspy uses a unified approach to receive telemetry, you normally do not need to select a protocol in the platform when the device is configured to report to Plaspy.

- Plaspy server domain is d.plaspy.com and the Plaspy server IP is 54.85.159.138 with the port set to 8888.
- The device may be configured using UDP or TCP on port 8888 and Plaspy accepts both transports.
- All devices in Plaspy use the same port which simplifies device configuration and onboarding.
- Plaspy automatically detects the tracker protocol once the device reports to the platform endpoint.
- When a device is correctly pointed to the Plaspy endpoint, manual protocol selection inside the platform is typically unnecessary.

## Transport and Connection Context

Connection setup is a practical consideration for reliable reporting. The PioneerX 100 supports modern cellular transports and can be configured to use the transport that best fits the deployment and carrier environment. Pointing the device at the correct Plaspy endpoint and transport ensures messages reach the platform reliably.

- The device may use either UDP or TCP on port 8888 depending on the unit configuration and firmware capabilities.
- Devices can be configured to report to the domain d.plaspy.com or directly to the IP 54.85.159.138 if DNS resolution is not available.
- Plaspy listens on the same port for all supported devices which reduces configuration complexity for bulk deployments.
- Transport selection is typically made in the device configuration tool, via USB or Type C setup, or by remote provisioning such as FOTA when supported.
- Choosing TCP versus UDP may affect delivery characteristics and should follow manufacturer guidance and carrier best practices.

## Protocol Compatibility Notes

- Firmware versions and regional hardware revisions can alter available fields, encryption options and message frequency. Validate features against the device firmware you have in hand.
- Some manufacturer firmware builds support additional transports or security options such as AES encryption; confirm which options are active for your unit.
- Hardware revisions or SKU differences can change available I O mappings or BLE sensor support used by the protocol.
- Transport mode selection (TCP or UDP) is done at the device configuration level and may require different settings in the installer tool or provisioning profile.
- Cached position behavior and buffer sizes may differ by firmware; verify offline caching behavior for historical trail recovery.
- For any uncertainty about firmware specific behavior consult the official TopFly documentation and release notes.

## Why Protocol Understanding Matters

Understanding the role of the tracker protocol helps ensure that devices are configured correctly, that expected telemetry reaches Plaspy, and that troubleshooting steps are efficient when issues arise. A clear view of protocol responsibilities reduces integration friction and improves long term reliability.

- Correct endpoint and transport configuration ensures telemetry and position updates are received by Plaspy without delay.
- Awareness of firmware dependent features helps set realistic expectations for event reporting and buffered upload behavior.
- Knowing how the device reports I O and BLE sensor events speeds up mapping those signals to Plaspy alerts and rules.
- Understanding security options available on device firmware helps align configuration with organizational encryption policies.
- Protocol awareness shortens troubleshooting by narrowing focus to configuration, transport, firmware or carrier issues rather than platform settings.

## Why Use Plaspy with This Protocol

Using the PioneerX 100 with Plaspy provides organizations with reliable visibility and operational oversight from a compact, hardwired tracker. The combined capabilities of frequent updates, buffered offline caching, configurable I O for immobilizer workflows and BLE sensor support make the pairing useful for fleet managers, logistics operators and service providers who require both live tracking and historical analytics.

Learn more about Plaspy on the main website https://www.plaspy.com and verify device specific protocol and firmware details on the manufacturer site https://www.topflytech.com/ to ensure you have the most current implementation information. Protocol support and firmware behavior can change over time so checking the official manufacturer documentation is recommended for precise device configuration and capabilities.
