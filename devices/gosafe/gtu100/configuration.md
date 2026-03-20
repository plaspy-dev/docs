---
slug: /gosafe/gtu100/configuration
id: gtu100-configuration
sidebar_label: Configuration
title: Gosafe - GTU100 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for connecting the Gosafe GTU100 to Plaspy with server settings and setup workflow
keywords:
  - Gosafe GTU100 configuration
  - Gosafe GTU100 setup
  - GTU100 Plaspy setup
  - Plaspy GPS tracker setup
  - Gosafe tracker configuration
  - GTU100 configuration guide
  - Vehicle tracking GTU100
  - Fleet GPS GTU100
  - Plaspy tracker compatibility
  - GTU100 server configuration
---

# Gosafe - GTU100 Configuration

This page documents the public configuration context for using the Gosafe GTU100 tracker with the Plaspy platform. It explains the shared Plaspy server settings and practical steps you can follow to prepare the GTU100 for integration while highlighting where manufacturer-specific setup varies.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer-side steps may differ by firmware version, hardware revision, installation type, or vendor configuration tools such as Gosafe GICUS or other provisioning utilities. Use this guide to apply the public Plaspy values and then confirm device-specific commands or workflows with the official Gosafe documentation.

## Configuration Overview

The configuration process centers on directing the GTU100 to report telemetry and events to Plaspy, validating connectivity, and ensuring the device appears and updates correctly in the platform. The GTU100's network capabilities and onboard event processing make it straightforward to integrate once the correct server settings are applied.

- Point the GTU100 to the public Plaspy endpoint so location and event data are delivered to the platform.
- Select the transport protocol (UDP or TCP) according to installer preference or firmware support.
- Set the shared Plaspy port so the device's outbound packets reach the correct listener in Plaspy.
- Verify SIM, network registration, and signal quality for reliable data delivery.
- Confirm the device reports successfully in Plaspy and that event processing (GEM) and remote management (GICUS) behave as expected.

## Plaspy Server Settings

- Server domain d.plaspy.com for DNS based configuration and recommended hostname use
- Server IP 54.85.159.138 as the direct endpoint alternative to the hostname
- Port 8888 as the single port used by Plaspy for all supported devices
- Transport support for UDP or TCP depending on tracker configuration options
- Automatic protocol detection in Plaspy so the platform can identify and process the tracker protocol without per device protocol registration

## Typical Requirements Before Setup

- Access to the official Gosafe configuration method or software such as GICUS, the device web interface, or the vendor provisioning tool
- An active SIM or eSIM profile with a carrier data plan appropriate for the target region and APN settings configured if required
- Power and physical install readiness including proper connection to vehicle power and any required ignition or input wiring
- Device firmware updated to a version recommended by the installer or vendor when possible
- Network coverage and signal verification at the installation location before completing setup
- A Plaspy account or platform access for final device validation and visibility checks

## How This Tracker Connects to Plaspy

The GTU100 transmits location, motion, and sensor data to Plaspy by sending IP packets to the shared Plaspy server endpoint and port. Plaspy receives device traffic on the common listener and automatically determines the appropriate protocol handler to parse the tracker messages.

- The tracker reports GNSS positions, motion events, and sensor telemetry to d.plaspy.com or 54.85.159.138 on port 8888
- Data can be sent over either UDP or TCP depending on the configured transport on the GTU100
- Plaspy automatically detects the tracker protocol and routes incoming messages to the correct parser and device record
- Event-driven records such as ignition changes, crash alerts, and driver ID are forwarded into Plaspy once the device is actively reporting
- Successful connectivity makes the GTU100 visible for real-time tracking, historical reporting, and remote management

## Common Configuration Workflow

1. Access the official Gosafe configuration method or software provided by the vendor (for example GICUS, vendor web UI, or approved SMS/USB tools).
2. In the server or APN section, enter the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138.
3. Set the destination port to 8888, which is the single port Plaspy uses for all supported devices.
4. Choose the transport protocol UDP or TCP if the GTU100 requires a transport selection in its configuration.
5. Apply or save the device configuration according to the manufacturer tool workflow.
6. Restart the GTU100 if the vendor instructions require a reboot for settings to take effect.
7. Validate connectivity by confirming the device reports to Plaspy and appears in the platform with timely position and event updates.

## Example Configuration Commands

The public modelConfiguration for the GTU100 does not include specific command strings in this release. Exact configuration commands and the method used to apply them vary by manufacturer tool, firmware, and regional firmware builds. Gosafe-provided tools such as GICUS, USB configuration utilities, or SMS command sets are commonly used to set server hostnames, IP addresses, ports, and transport.

If you require command examples for a particular firmware or provisioning flow, consult the official Gosafe configuration guide or vendor provisioning documentation. The manufacturer typically provides explicit command syntax, placeholders for APN values like [apn] or credentials like [apnu] and [apnp] when applicable, and instructions for optional reset steps.

## Configuration Notes

- Firmware and hardware revisions can change available menu options and exact command syntax; always confirm against the model and firmware version in use.
- Choose UDP or TCP based on installation preferences and any guidance from Gosafe or your connectivity provider; Plaspy accepts both transports on port 8888.
- Remember that Plaspy uses the same port for all devices and automatically detects the tracker protocol, so standardizing on d.plaspy.com and port 8888 simplifies fleet provisioning.
- Use the official Gosafe provisioning tools for bulk deployments to ensure consistent settings and to take advantage of GICUS or OTA update capabilities.
- If SMS configuration is used by the vendor for initial provisioning, follow Gosafe SMS command documentation carefully and verify results in the Plaspy platform.

## Why Use Plaspy with This Configuration

Using the GTU100 with Plaspy gives fleet operators a robust integration for real-time location, event-driven alerts, and sensor telemetry. The GTU100's multi-GNSS receiver, dual-SIM or eSIM options, and onboard event processing work together to provide continuous visibility into vehicle position and status, while Plaspy handles incoming telemetry and presents it for monitoring, reporting, and operational workflows.

To learn more about Plaspy and how it ingests device telemetry, visit https://www.plaspy.com. For the latest device specific configuration methods, firmware behavior, and manufacturer details, verify current information on the Gosafe website at https://gosafesystem.com/.
