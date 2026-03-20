---
slug: /skypatrol/sp1824/configuration
id: sp1824-configuration
sidebar_label: Configuration
title: SkyPatrol - SP1824 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for SkyPatrol SP1824 showing Plaspy server settings and practical setup steps to connect the tracker to Plaspy
keywords:
  - SkyPatrol SP1824
  - SkyPatrol SP1824 configuration
  - SkyPatrol SP1824 setup
  - SP1824 Plaspy
  - Plaspy tracker setup
  - GPS tracker configuration
  - vehicle tracker configuration
  - fleet tracking setup
  - OBD II tracker configuration
  - accelerometer event tracking
---

# SkyPatrol - SP1824 Configuration

This page documents the public configuration context for using the SkyPatrol SP1824 with Plaspy. It focuses on the practical, platform-level settings and workflow required to point the tracker at Plaspy servers and validate that the device is reporting location and telemetry for real time monitoring and reporting.

The SP1824 is an economical vehicle tracker with 4G LTE Cat 1 and 2G fallback, internal cellular and GPS antennas, optional OBD II telemetry, an embedded accelerometer, and a small backup battery. Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer side setup steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools, so follow SkyPatrol documentation alongside these Plaspy-focused instructions.

## Configuration Overview

Configuring the SP1824 for Plaspy prepares the device to reliably transmit location, motion events, and optional vehicle telemetry to Plaspy servers for live tracking and historical reporting. The goal is to set the device network endpoint and transport, confirm cellular connectivity and APN, and verify the device shows up in Plaspy.

- Point the device to the Plaspy server endpoint so the tracker can deliver real time telemetry.
- Choose TCP or UDP transport if the device requires a transport selection.
- Ensure the device has a valid cellular data connection and correct APN settings if required.
- Verify the device sends location and event data and appears in the Plaspy platform.
- Configure optional OBD II telemetry only when the vehicle and installer require those additional signals.

## Plaspy Server Settings

- server domain d.plaspy.com
- server IP 54.85.159.138
- port 8888
- transport support for UDP or TCP on port 8888
- automatic protocol detection in Plaspy so the platform will identify the tracker protocol

Note that Plaspy uses the same port 8888 for all supported devices. Configure the SP1824 to report to d.plaspy.com or 54.85.159.138 on port 8888 using either UDP or TCP as required by the device configuration tool.

## Typical Requirements Before Setup

- Reliable vehicle power or a charged device battery and confirmation of the device installation method (hardwired or OBD II).
- A working cellular SIM with an active data plan and the correct APN configured for the SIM operator.
- Access to the official SkyPatrol configuration method or software that the SP1824 requires for server and transport settings.
- Physical access to the device for initial setup and reboots if the tracker is installed in a vehicle.
- A Plaspy account or platform access to validate that the device appears and is reporting after configuration.
- Knowledge of the current device firmware version where possible, since settings menus and behavior can vary by firmware.

## How This Tracker Connects to Plaspy

The SP1824 sends GNSS location fixes, motion events, and any configured OBD II telemetry over the cellular network to Plaspy. The tracker is configured to report to the shared Plaspy server endpoint and port so the platform can ingest and display the device data for monitoring and reporting.

- The device delivers real time location updates to d.plaspy.com on port 8888.
- Data is transmitted over the cellular link using either UDP or TCP depending on the device configuration.
- Motion and accelerometer events (for movement or harsh braking) are forwarded to Plaspy for alerts and event processing.
- Optional OBD II telemetry is sent when the tracker is configured for OBD II integration and the vehicle exposes those parameters.
- Power loss or backup battery events are reported so Plaspy can surface tampering or disconnect notifications.

## Common Configuration Workflow

1. Access the official SkyPatrol SP1824 configuration method or software provided by the manufacturer or installer tool.
2. Set the Plaspy server endpoint by entering d.plaspy.com or the server IP 54.85.159.138 in the device server field.
3. Set the device port to 8888, since Plaspy uses the same port for all devices.
4. Choose the transport protocol UDP or TCP if the device requires a transport selection.
5. Configure the SIM operator APN and any required authentication so the device can establish a cellular data session.
6. Apply or save the configuration in the device tool and then restart the tracker if required by the manufacturer instructions.
7. Validate that the device is reporting to Plaspy by checking device status on the Plaspy platform and confirming location and event updates are visible.

## Example Configuration Commands

The SP1824 manufacturer may provide SMS, web, or serial configuration methods and exact commands vary by firmware and vendor tools. Plaspy requires the device to be pointed at d.plaspy.com or 54.85.159.138 on port 8888 using TCP or UDP. Consult SkyPatrol documentation or the configuration tool supplied with your tracker for the exact command syntax for your firmware version.

## Configuration Notes

- Firmware differences can change menu locations and command syntax; always verify commands against the SP1824 firmware revision and SkyPatrol documentation.
- Choose UDP for lower overhead or TCP for session reliability depending on network conditions and installer preference; both are supported by Plaspy on port 8888.
- Confirm APN settings with the SIM operator before deploying the device to avoid connectivity gaps.
- If using the OBD II option, enable and verify OBD telemetry only where the vehicle exposes compatible parameters.
- If the device supports SMS configuration, ensure SMS control is secure and documented by the installer.

## Why Use Plaspy with This Configuration

Using the SkyPatrol SP1824 with Plaspy provides a straightforward path to reliable vehicle location, motion event detection, and optional vehicle telemetry for fleet management. The SP1824’s cellular connectivity and internal antennas simplify installation, and directing the device to Plaspy’s shared server endpoint ensures data flows into a platform built for live tracking, alerts, and historical reporting.

To learn more about Plaspy and how to manage devices at scale visit https://www.plaspy.com. For the most current device specific setup methods, firmware notes, and manufacturer instructions verify details with SkyPatrol at https://www.skypatrol.com/ since manufacturer configuration steps and firmware behavior can change over time.
