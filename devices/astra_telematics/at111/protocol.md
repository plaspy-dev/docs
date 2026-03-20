---
slug: /astra_telematics/at111/protocol
id: at111-protocol
sidebar_label: Protocol
title: Astra Telematics - AT111 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for Astra Telematics AT111 and Plaspy showing connection context and detection details
keywords:
  - Astra Telematics AT111 protocol
  - Astra Telematics AT111 GPS
  - AT111 Plaspy integration
  - AT111 tracking protocol
  - Astra Telematics tracker protocol
  - AT111 GPS tracker compatibility
  - Plaspy device protocol
  - vehicle tracking AT111
  - AT111 fleet telematics
  - AT111 communication protocol
---

# Astra Telematics - AT111 Protocol

This page describes the public protocol context for using the Astra Telematics AT111 GPS tracker with Plaspy. It focuses on how the device communicates with the Plaspy platform in broad, non sensitive terms so integrators and installers understand connection and reporting expectations without exposing proprietary details.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol when the device reports to the Plaspy endpoint. Exact protocol behavior and available features can vary by firmware version, hardware revision, regional model, and manufacturer implementation, so device behavior in the field may differ from manufacturer documentation or release notes.

## Protocol Overview

The AT111 uses a device reporting protocol to deliver GNSS positions, sensor values, and vehicle telemetry to a remote server for ingestion into fleet management software. In that role the protocol defines how the tracker identifies itself, when and what telemetry is sent, and how remote commands or acknowledgements are handled by the server.

- Enables the AT111 to report GNSS fixes, digital and analog inputs, and vehicle bus data to Plaspy for mapping and analysis.
- Carries device identification and status information so Plaspy can correlate incoming messages to a registered tracker.
- Signals event conditions such as ignition changes, alarms, or geofence triggers for use in alerts and rules.
- Supports transport over common IP protocols so telemetry can be sent reliably from cellular networks to the server.
- Allows for periodic and event driven reporting to balance power, data usage, and timeliness of information.

## How Plaspy Detects the Protocol

Plaspy listens on a shared public endpoint and port for incoming tracker connections, and it automatically detects the reporting protocol used by the device when a properly configured AT111 connects. In most cases installers do not need to choose a protocol manually inside Plaspy as long as the device is configured to report to the Plaspy endpoint.

- Plaspy accepts tracker connections at the domain d.plaspy.com and at the public IP 54.85.159.138 on port 8888.
- Plaspy uses the same port for all supported devices so a single outbound port setting is sufficient for device configuration.
- When an AT111 is pointed to the Plaspy endpoint using the correct transport and credentials, Plaspy will detect the protocol automatically and begin ingesting telemetry.
- Typical setup steps are configuring the device APN and server address, ensuring the device has cellular connectivity, and verifying the device can reach d.plaspy.com or 54.85.159.138.
- Manual protocol selection inside the platform is usually unnecessary unless a custom or nonstandard device configuration is in use.

## Transport and Connection Context

The AT111 can be configured to use common IP transports for sending telemetry to Plaspy. Depending on firmware and configuration choices the device may use either UDP or TCP to reach the Plaspy endpoint, and installers should select the transport that best fits their network and reliability needs.

- Devices may be configured to use UDP or TCP on port 8888 depending on device support and installer preference.
- The tracker can report to the domain d.plaspy.com or directly to the IP address 54.85.159.138; both resolve to the Plaspy ingestion endpoint.
- Because Plaspy uses the same port for all devices, the port number is consistent across AT111 installations and other supported trackers.
- Cellular operator policies, firewall rules, and NAT can affect connectivity so verify that outbound device traffic to port 8888 is permitted on the installation network.
- Ensure APN and SIM settings are correct and that the device has a usable data plan for the expected reporting cadence.

## Protocol Compatibility Notes

- Firmware revisions may change available commands, reporting intervals, or optional fields in device messages; verify firmware level when troubleshooting.
- Hardware revisions and regional variants can affect supported cellular bands and available I/O features; confirm the exact AT111 model variant for your region.
- Some features require specific firmware options or configuration profiles from Astra Telematics to expose CANBus mapping or custom input handling.
- Transport selection (UDP vs TCP) can affect delivery behavior under poor mobile conditions; choose the transport based on reliability and data usage needs.
- Manufacturer configuration guides and release notes are the authoritative source for command lists and configuration syntax for a given firmware.
- Validate any customizations or third party integrations against official Astra Telematics documentation before deploying at scale.

## Why Protocol Understanding Matters

A general understanding of the AT111 reporting protocol and how it interacts with Plaspy helps ensure a smooth installation, accurate telemetry ingestion, and reliable long term operation of fleet systems.

- Faster setup by knowing which server address, transport, and APN settings to program into the device.
- Quicker troubleshooting when messages are not arriving due to transport, APN, or firewall issues.
- Better power and data planning by aligning reporting intervals and event triggers to operational needs.
- Clear expectations for what telemetry and vehicle bus data the device can provide to Plaspy.
- Informed decisions about firmware upgrades and when to consult Astra Telematics release notes for behavior changes.

## Why Use Plaspy with This Protocol

Using the AT111 with Plaspy gives organizations a practical path to integrate a rugged, externally antenna capable tracker into a centralized telematics platform. The AT111’s GNSS reception flexibility, extensive I/O, and CANBus interfaces make it well suited for fleet tracking, asset monitoring, and anti theft applications where reliable position and vehicle telemetry are required.

Plaspy’s shared ingestion endpoint simplifies device provisioning because all supported devices report to the same port and Plaspy automatically detects the tracker protocol when a device reports to d.plaspy.com or 54.85.159.138 on port 8888. To learn more about how Plaspy works and to evaluate platform features visit https://www.plaspy.com. Please note that protocol support, firmware behavior, and manufacturer implementation details can change over time so verify current device specific documentation and firmware information at the Astra Telematics website https://astratelematics.com/.
