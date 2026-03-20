---
slug: /stars_nav/pt_33_lite/configuration
id: pt_33_lite-configuration
sidebar_label: Configuration
title: Stars Nav - PT-33 Lite Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Stars Nav PT-33 Lite integration with Plaspy using shared server settings and SMS based reporting
keywords:
  - Stars Nav PT-33 Lite configuration
  - PT-33 Lite setup
  - Stars Nav PT-33 Lite Plaspy
  - PT-33 Lite server configuration
  - PT-33 Lite SMS tracker configuration
  - Plaspy tracker configuration
  - GPS tracker configuration guide
  - personal GPS tracker setup
  - PT-33 Lite panic button configuration
  - PT-33 Lite motion alert setup
---

# Stars Nav - PT-33 Lite Configuration

This page covers the public configuration context for using the Stars Nav PT-33 Lite with Plaspy. It explains the practical, public-facing steps and considerations for routing PT-33 Lite location reports and alerts into the Plaspy platform. The PT-33 Lite is an SMS based personal GPS tracker built for simple on demand location requests, panic alerts, and motion aware notifications; this guide focuses on how those SMS or call driven reports are brought into Plaspy for monitoring and logging.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer side setup steps can vary by firmware revision, hardware variation, installation type, and vendor tools. Because the PT-33 Lite is SMS first, integrating it with Plaspy commonly uses an SMS gateway or forwarding method to deliver the tracker messages into Plaspy’s intake at the shared server endpoint and port described below.

## Configuration Overview

Preparing a PT-33 Lite for Plaspy integration centers on making sure the device’s outbound reports are routed to Plaspy and that the tracker is reachable and configured to respond to location requests and alerts. The objective is to ensure the tracker’s SMS or call based messages are received, translated if necessary, and ingested by Plaspy so positions and events appear in the dashboard.

- Configure the tracker or intermediary SMS gateway to forward location reports and alerts into Plaspy.
- Verify the device can send SMS or call reports reliably and that those messages are captured for ingestion.
- Ensure the Plaspy server endpoint and port are entered where required by your configuration method.
- Test on demand location requests, panic button alarms, and motion alerts and confirm they are visible in Plaspy.
- Validate that the chosen transport and gateway flow match the tracker and local network capabilities.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP depending on the gateway or forwarding tool
- Automatic protocol detection in Plaspy so the platform recognizes the tracker protocol on arrival

These public values are the Plaspy endpoint details to use when routing PT-33 Lite messages. Plaspy uses the same port for all supported devices and will automatically detect the tracker protocol when data arrives.

## Typical Requirements Before Setup

- An active PT-33 Lite device with working power and the ability to send SMS or respond to calls.
- A working cellular SIM and service plan capable of sending and receiving SMS or calls, where required by the device.
- Access to the official Stars Nav configuration method for the PT-33 Lite (SMS command list or vendor software) or access to the SMS gateway used to forward messages.
- An SMS gateway or forwarding service if you need to convert SMS reports into TCP or UDP messages for Plaspy ingestion.
- A test plan to request on demand locations, trigger the panic button, and generate motion or geo-fence alerts for verification.
- Administrative access to any intermediary systems (SMS gateway or server) that will forward messages to d.plaspy.com port 8888.

## How This Tracker Connects to Plaspy

The PT-33 Lite is SMS and call based by design, so typical Plaspy integration routes those SMS messages through a gateway or forwarding service that converts them into network messages sent to Plaspy’s shared server endpoint. Once delivered to the Plaspy server at d.plaspy.com on port 8888, Plaspy automatically detects the tracker protocol and maps the incoming position and event data into the appropriate account and device view.

- The tracker sends SMS or call triggered location and alert messages to predefined contacts or gateway numbers.
- An SMS gateway or forwarding system receives the messages and forwards them to d.plaspy.com or 54.85.159.138 on port 8888.
- Plaspy accepts TCP or UDP transport; choose UDP or TCP in the gateway configuration depending on your gateway capabilities.
- Plaspy automatically detects the tracker protocol and associates incoming data with the PT-33 Lite device record.
- Location reports, panic alerts, motion and geo-fence events appear in Plaspy dashboards and event logs after successful ingestion.

## Common Configuration Workflow

1. Access the official Stars Nav configuration method or software for the PT-33 Lite (SMS commands or vendor tool).
2. Enter the Plaspy server endpoint using either the domain d.plaspy.com or the server IP 54.85.159.138 as required by your configuration path.
3. Set the port to 8888 for outbound forwarding to Plaspy.
4. Choose UDP or TCP on the gateway or forwarding tool if the device or gateway requires an explicit transport selection.
5. Apply or save the configuration in the device settings or in your SMS gateway tool.
6. Restart the device or gateway if required by the manufacturer instructions.
7. Validate that the device reports to Plaspy by requesting an immediate location or triggering a test alert and confirming visibility in Plaspy.

## Example Configuration Commands

The PT-33 Lite configuration commands and exact steps vary by firmware and the official Stars Nav command set. Because manufacturer tools and SMS command syntaxes differ across firmware versions, the precise commands are not provided here. Use the Stars Nav SMS command reference or vendor software to set the outbound forwarding destination to d.plaspy.com or 54.85.159.138 and port 8888, and to select UDP or TCP if your setup requires it.

If you are using an SMS gateway, follow the gateway vendor instructions to map incoming tracker SMS messages into TCP or UDP messages directed at:
- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport UDP or TCP as available

Refer to the official Stars Nav documentation for the specific SMS command examples for the PT-33 Lite.

## Configuration Notes

- Firmware differences can change SMS command syntax and available options; always check the Stars Nav documentation for your unit’s firmware version.
- Because the PT-33 Lite is SMS first, many deployments use an SMS gateway; configure that gateway to forward to d.plaspy.com or 54.85.159.138 on port 8888.
- Choose UDP or TCP in your gateway depending on reliability needs and gateway capabilities; Plaspy accepts both and will auto detect the protocol.
- Plaspy uses the same port 8888 for all supported devices, simplifying multi device deployments.
- Confirm that the phone number and forwarding rules on the PT-33 Lite are correct before relying on automated forwarding to Plaspy.

## Why Use Plaspy with This Configuration

Using the PT-33 Lite with Plaspy provides a practical solution for organizations and families that need actionable location reports and emergency alerts without continuous data usage. The combination of SMS based reporting and Plaspy ingestion via an SMS gateway or forwarding method delivers timely position updates, panic notifications, and motion alerts into a centralized monitoring environment for operational oversight and incident response.

To learn more about Plaspy and how it supports low bandwidth SMS based trackers like the PT-33 Lite visit https://www.plaspy.com. For the latest device specific commands, firmware notes, and manufacturer guidance for the PT-33 Lite consult Stars Nav at http://www.starsnav.com/ since device behavior and setup methods can change with firmware and hardware revisions.
