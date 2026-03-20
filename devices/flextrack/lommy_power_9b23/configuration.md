---
slug: /flextrack/lommy_power_9b23/configuration
id: lommy_power_9b23-configuration
sidebar_label: Configuration
title: Flextrack - Lommy Power 9B23 Configuration
sidebar_class_name: menu_item_tracker
description: Setup and server configuration guide for Flextrack Lommy Power 9B23 with Plaspy compatibility and practical integration steps
keywords:
  - Flextrack Lommy Power 9B23 configuration
  - Flextrack Lommy Power setup
  - Lommy Power Plaspy configuration
  - GPS tracker configuration
  - vehicle tracking setup
  - fleet management tracker setup
  - Lommy Power server configuration
  - Plaspy device configuration
  - Flextrack GPS platform setup
  - Lommy Power GPS setup
---

# Flextrack - Lommy Power 9B23 Configuration

This page covers the public configuration context for using the Flextrack Lommy Power 9B23 with Plaspy. It summarises the practical settings and workflow needed to point the device at Plaspy so location and telemetry data are received reliably. The guidance below focuses on the shared server settings Plaspy expects and on manufacturer-side setup considerations that are public and widely applicable.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol when data arrives, while the exact manufacturer-side steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools. Use the information here to prepare the device for Plaspy ingestion and consult Flextrack official documentation for any device-specific or firmware-specific commands.

## Configuration Overview

This configuration process prepares Lommy Power 9B23 to send position and telemetry data to Plaspy so the device appears in your Plaspy dashboards and APIs. The objective is to point the device at the Plaspy endpoint, choose the appropriate transport, confirm connectivity, and verify that Plaspy receives and interprets the device protocol correctly.

- Configure the device to report to Plaspy's shared server endpoint so data flows into Plaspy dashboards and APIs.
- Choose the transport method supported by the unit and set the device to use the Plaspy port used by all Plaspy devices.
- Validate cellular connectivity and any APN or SIM settings required by the local mobile operator.
- Apply and save the manufacturer configuration, then reboot the device if recommended.
- Confirm telemetry and event reports appear in Plaspy so location, ignition, motion, and operating hours are visible.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- Confirm the Lommy Power 9B23 is installed and hard wired to machine power according to Flextrack guidance (operating range 5–40 V).
- An active SIM with a data plan or SMS capability as required by your install and local network coverage; confirm APN and SMS availability with your carrier.
- Access to the Flextrack configuration method or official configuration tool used to set server and transport settings.
- Basic wiring and installation verification to ensure GNSS and cellular reception from the installed location.
- A way to observe device responses after configuration such as an LED status indicator, serial/USB logs, or a connectivity verification method recommended by the manufacturer.
- Credentials and physical access to restart or power cycle the device if required by the configuration workflow.

## How This Tracker Connects to Plaspy

When configured for Plaspy, Lommy Power 9B23 sends its GNSS positions and telemetry over the cellular link to the Plaspy server endpoint and port. Plaspy receives the messages, automatically identifies the tracker protocol, and processes events and telemetry into the platform.

- The device is set to send data to d.plaspy.com or 54.85.159.138 on port 8888.
- Transport can be UDP or TCP depending on installer preference or firmware options; both are accepted by Plaspy.
- Plaspy automatically detects the tracker protocol so no separate protocol selection is required in the platform.
- Events such as ignition, motion, and operating hours are transmitted to Plaspy and mapped into alerts and utilization reports.
- If cellular service is interrupted, local buffering on the device retains recent data until connectivity is restored and Plaspy ingests the queued messages.

## Common Configuration Workflow

1. Access the official Flextrack configuration method or software as provided by the manufacturer or vendor. This may be a web tool, a serial/USB utility, SMS commands, or a dedicated configuration app.
2. Enter the Plaspy server address either as the domain d.plaspy.com or the server IP 54.85.159.138 in the device server settings.
3. Set the device port to 8888. Note that all devices in Plaspy use the same port.
4. Choose UDP or TCP for transport if the device requires a transport selection, based on your network and installer preference.
5. Configure any required APN or SIM parameters for your mobile operator so the device can establish a cellular data session.
6. Apply or save the configuration and perform any recommended device restart or power cycle to activate the settings.
7. Validate that the device reports to Plaspy by checking for incoming data in Plaspy and confirming that position and telemetry appear. Plaspy will automatically detect the tracker protocol.

## Example Configuration Commands

The Lommy Power 9B23 can be configured using Flextrack manufacturer tools or methods that may include SMS commands, a configuration app, or a USB/serial utility. Exact command syntax and available commands vary by firmware and vendor tool, so the commands are not reproduced here. Use the Flextrack configuration guide or vendor tool to set:

- Server domain or server IP to d.plaspy.com or 54.85.159.138
- Port to 8888
- Transport to UDP or TCP where required

If your vendor provides SMS templates or command strings for server setup, apply those templates to point the device to d.plaspy.com or 54.85.159.138 and port 8888. Preserve any placeholders such as an APN placeholder if presented by the manufacturer and consult Flextrack documentation for the exact SMS or command syntax.

## Configuration Notes

- Firmware differences can change the exact configuration steps and command syntax; always check the current Flextrack documentation for your firmware revision.
- UDP is commonly used for low-overhead telemetry while TCP may be chosen for session reliability; Plaspy accepts both and will detect the protocol automatically.
- If SMS configuration is available, it can be a convenient method for field updates, but verify SMS commands and formats with Flextrack.
- Confirm APN, username, and password settings if a carrier requires them; these values come from your mobile operator and are not provided by Plaspy.
- After applying changes, allow time for the device to register to the cellular network and for Plaspy to ingest the first messages.

## Why Use Plaspy with This Configuration

Using the Lommy Power 9B23 with Plaspy gives fleet and equipment managers continuous visibility into location, ignition and motion events, and operating hours using a rugged, hard-wired tracker. Pointing the device at Plaspy's shared server endpoint and port, and choosing UDP or TCP as appropriate, enables the device to stream telemetry into Plaspy dashboards and APIs for geofencing, utilization reporting, and alerts.

To learn more about Plaspy and how the platform handles device ingestion and mapping, visit https://www.plaspy.com. For the most current device specific setup details, firmware behavior, and manufacturer guidance always verify instructions on the Flextrack website https://flextrack.dk.
