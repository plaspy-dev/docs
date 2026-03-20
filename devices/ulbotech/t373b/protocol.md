---
slug: /ulbotech/t373b/protocol
id: t373b-protocol
sidebar_label: Protocol
title: Ulbotech - T373B Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol guide for Ulbotech T373B GPS tracker integration with Plaspy including connection context and compatibility notes
keywords:
  - Ulbotech T373B
  - T373B protocol
  - Ulbotech GPS protocol
  - T373B Plaspy compatibility
  - OBD II tracker protocol
  - vehicle tracking protocol
  - GPS tracker communication
  - fleet tracking T373B
  - Plaspy device protocol
  - T373B telemetry
---

# Ulbotech - T373B Protocol

This page documents the public protocol context for using the Ulbotech T373B with Plaspy. It explains how the tracker communicates with Plaspy at a high level, what connection settings are used publicly, and what to consider when integrating the T373B into a Plaspy deployment. Technical specifics that are manufacturer or firmware dependent are intentionally omitted to keep this guidance safe and generally applicable.

The T373B is a plug and play OBD II GPS tracker built around a Telit xE910 cellular modem and a u-blox MAX 7 GNSS module, with Bluetooth 4.0 LE for local extension. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol. Exact protocol behaviour and available telemetry can vary by firmware version, hardware revision, and how the manufacturer implements reporting and commands.

## Protocol Overview

The T373B uses a device reporting protocol to send location, on board diagnostics, and event telemetry to a remote server for processing. For integration with Plaspy, that protocol carries identification, periodic and event-driven position reports, and vehicle telemetry needed by fleet and asset management systems.

- The protocol's role is to package GNSS position, OBD II and CAN telemetry, input/output events, and driver behaviour signals for transmission to a backend.
- It enables the tracker to identify itself to the server so Plaspy can associate incoming messages with the correct device and vehicle record.
- Event reports such as DTC alerts, ignition changes, or immobilizer events are conveyed so Plaspy can trigger alerts and workflows.
- Telemetry over the protocol supports continuous tracking and historical playback in Plaspy dashboards.
- The protocol may include mechanisms for periodic heartbeats and configuration acknowledgements as implemented by the device firmware.

## How Plaspy Detects the Protocol

Plaspy receives data from compatible trackers at a shared network endpoint and uses that incoming data to determine the device protocol automatically. In most standard deployments of the T373B, no manual protocol selection inside Plaspy is required when the device is configured to report to the Plaspy endpoint.

- Plaspy listens on a single shared port for all supported devices so configuration is simplified for installers and fleet teams.
- Devices intended for Plaspy should be configured to report to d.plaspy.com or the Plaspy server IP 54.85.159.138 and the configured port.
- Plaspy automatically detects the tracker protocol when properly reporting to the Plaspy endpoint, reducing the need for per device protocol selection.
- If a device reports correctly to the endpoint, Plaspy associates its messages with the registered device record and begins processing position and telemetry.
- Users typically only need to ensure the T373B is pointed at the Plaspy server and that device reporting is enabled in the tracker configuration.

## Transport and Connection Context

Connection transport for the T373B can be configured to use UDP or TCP depending on device support and operational requirements. For communication with Plaspy, the public connection settings are consistent across supported devices and documented for installers.

- The device may be configured using UDP or TCP on port 8888 to send reports to Plaspy.
- The Plaspy server domain for reporting is d.plaspy.com and the public server IP is 54.85.159.138.
- All devices in Plaspy use the same port which simplifies firewall and network planning for fleets.
- Choose UDP for lower latency and simpler transport in many live tracking scenarios, or TCP where reliable delivery is preferred and supported by the device firmware.
- Ensure APN and cellular settings on the T373B are correct so the modem can reach the Plaspy endpoint over mobile networks.

## Protocol Compatibility Notes

- Firmware versions can change message content and available telemetry fields; verify the device firmware release notes when planning integration.
- Hardware revisions and module variants (for example cellular module band variants) may affect behaviour and available diagnostics.
- Manufacturer side configuration options such as transport selection, reporting intervals, and telemetry sets will change how much data is sent to Plaspy.
- Bluetooth and FOTA features can alter configuration workflows but do not change the public reporting endpoint requirements.
- Confirm the device is configured to report to d.plaspy.com or 54.85.159.138 and uses port 8888 to ensure Plaspy receives messages.
- Always cross check Plaspy reception with device-side configuration and any available logging or local tools for initial setup.

## Why Protocol Understanding Matters

A basic understanding of the tracker communication protocol helps installers and fleet managers set up devices correctly, diagnose common connectivity problems, and maintain reliable telemetry over time. Knowing how reporting, transport, and device identity are handled reduces setup time and supports faster resolution when data stops appearing in Plaspy.

- It clarifies which connection settings must be configured on the T373B for Plaspy to receive messages.
- It helps troubleshoot why a device may not appear in Plaspy when reports are not reaching the shared endpoint.
- It guides decisions about using UDP versus TCP for a particular deployment or network environment.
- It reduces ambiguity when comparing device firmware change logs to observed behaviour in the Plaspy dashboard.
- It informs policies for firmware updates and fleetwide configuration changes to avoid unintended reporting disruptions.

## Why Use Plaspy with This Protocol

Using the T373B with Plaspy provides a practical approach to plug and play vehicle monitoring where position, vehicle diagnostics, driver behaviour, and anti theft controls are required. The T373B’s OBD II form factor, GNSS performance, BLE convenience, and telemetry richness make it well suited for fleet tracking, rental operations, and insurance telematics when paired with Plaspy’s centralized processing and visualization.

To learn more about Plaspy and how it can manage devices like the Ulbotech T373B visit https://www.plaspy.com. Protocol support, firmware behaviour, and manufacturer device details can change over time, so please verify the latest device specific protocol documentation and firmware notes on the manufacturer website http://www.ulbotech.com/ before deploying at scale.
