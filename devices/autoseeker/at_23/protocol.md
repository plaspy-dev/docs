---
slug: /autoseeker/at_23/protocol
id: at_23-protocol
sidebar_label: Protocol
title: Autoseeker - AT-23 Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the Autoseeker AT 23 and how it communicates with Plaspy for reliable fleet tracking
keywords:
  - Autoseeker AT 23 protocol
  - Autoseeker GPS protocol
  - AT 23 tracking protocol
  - AT 23 GPS tracker Plaspy
  - AT 23 communication protocol
  - Plaspy compatible devices
  - vehicle tracker protocol
  - relay GPS tracker protocol
  - 2G GPS tracker compatibility
  - GNSS tracker integration
---

# Autoseeker - AT-23 Protocol

This page covers the public protocol context for using the Autoseeker AT-23 with Plaspy. It explains in practical terms how the AT-23 transmits GNSS positions, telemetry, and event messages into Plaspy while remaining focused on non sensitive, high level protocol details that are useful for installers and fleet operators.

Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, while exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation. The AT-23 is a compact 2G relay GPS tracker with GPS plus Beidou positioning, an integrated immobilizer relay, and a set of standard event reports that Plaspy ingests for live mapping, geofencing, and alerts.

## Protocol Overview

The communication protocol of the AT-23 defines how the tracker reports location, status, and events to a remote server. For Plaspy compatibility the focus is on consistent delivery of position fixes, relay state, power and battery events, and motion or tamper alerts so Plaspy can present accurate telemetry and trigger workflows.

- Delivers periodic and event driven location reports that include GNSS coordinates and temporal metadata for route history and live tracking.
- Sends event notifications such as geofence entry and exit, overspeed warnings, vibration or tamper alerts, and main power loss that Plaspy surfaces to users.
- Communicates relay status and remote cutoff or resume events so immobilizer actions can be recorded and audited in Plaspy.
- Provides device identification and status messages that allow Plaspy to associate incoming data with the correct asset and display telemetry on dashboards.
- Supports network transport that enables the tracker to reliably push messages to a Plaspy endpoint for real time ingestion.

## How Plaspy Detects the Protocol

Plaspy receives tracker traffic at a single shared endpoint and automatically determines which supported protocol a device is using. In normal setups the device is pointed to Plaspy and the platform matches incoming reports to its supported device profiles so most users do not need to select a protocol manually.

- Plaspy server domain is d.plaspy.com and Plaspy server IP is 54.85.159.138 for public ingestion.
- The port is 8888 and all devices in Plaspy use the same port for reporting.
- The device may be configured using UDP or TCP on port 8888 depending on the tracker configuration and network conditions.
- When the AT-23 is configured to report to the Plaspy endpoint the platform will automatically detect the tracker protocol and route data into the correct device view.
- Typical user action is limited to configuring the device to report to the Plaspy endpoint; Plaspy handles protocol mapping on receipt.

## Transport and Connection Context

Connection context covers how the AT-23 reaches Plaspy and the practical choices integrators make during installation. The AT-23 uses 2G cellular to send its reports and can be set to use either TCP or UDP to communicate with Plaspy depending on the tracker configuration.

- The device may be configured using UDP or TCP on port 8888 to reach Plaspy.
- Devices may point to the domain name d.plaspy.com or the numeric endpoint 54.85.159.138 as the server address.
- Plaspy uses the same port 8888 for all supported devices which simplifies device configuration across mixed fleets.
- UDP is commonly used for low overhead reporting while TCP can be chosen where delivery acknowledgement at the transport layer is desired by the installer.
- Network level considerations such as carrier NAT, APN settings, and SIM provisioning affect connectivity but not the high level protocol concepts described here.

## Protocol Compatibility Notes

- Firmware revisions can change the exact message set and behavior the AT-23 uses to report events and telemetry.
- Hardware variants or production batches may expose minor differences in supported features such as relay wiring or backup battery reporting.
- Manufacturer configuration options can affect whether the device uses UDP or TCP and which events are reported by default.
- Confirm that the device APN and SIM are correctly provisioned as cellular connectivity is required for Plaspy integration.
- Validate compatibility and feature availability against the manufacturer documentation before large deployments.
- Pointing the device to d.plaspy.com or 54.85.159.138 on port 8888 is the standard Plaspy ingestion approach for supported trackers.

## Why Protocol Understanding Matters

Understanding the AT-23 communication protocol helps ensure reliable installation, accurate telemetry, and predictable behavior inside Plaspy. Knowing what the tracker reports and how it reaches the server reduces setup time and eases troubleshooting when events or locations are not appearing as expected.

- Helps installers confirm APN and reporting settings to ensure the device reaches the Plaspy endpoint.
- Makes it easier to interpret event timelines in Plaspy by knowing which alerts the tracker can generate.
- Supports informed decisions about choosing UDP or TCP based on network characteristics and reliability needs.
- Reduces misconfiguration risk by aligning relay wiring and event reporting with Plaspy workflows for immobilization and alerts.
- Assists operations teams in planning firmware update and device lifecycle strategies that maintain compatibility.

## Why Use Plaspy with This Protocol

Using the Autoseeker AT-23 together with Plaspy delivers a practical solution for organizations that need visibility, tamper detection, and remote immobilization control for vehicles and mobile assets. The AT-23 supplies location and event telemetry while Plaspy aggregates that data into dashboards, geofences, history playback, and alerting workflows that support fleet operations and security responses.

If you want to learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the most current AT-23 protocol details, firmware differences, and installation instructions verify device specific information on the manufacturer site https://autoseekergps.com/ since protocol support and firmware behavior can change over time.
