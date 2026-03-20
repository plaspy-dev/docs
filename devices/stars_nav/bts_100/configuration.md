---
slug: /stars_nav/bts_100/configuration
id: bts_100-configuration
sidebar_label: Configuration
title: Stars Nav - BTS-100 Configuration
sidebar_class_name: menu_item_tracker
description: Public guide to configuring the Stars Nav BTS-100 for use with Plaspy including required server settings and practical setup steps
keywords:
  - Stars Nav BTS-100 configuration
  - Stars Nav BTS-100 setup
  - BTS-100 Plaspy configuration
  - Plaspy GPS tracker setup
  - Bluetooth SPP GPS
  - BTS-100 POI setup
  - fleet tracking BTS-100
  - GPS tracker server configuration
  - position streaming BTS-100
  - GPS platform setup Plaspy
---

# Stars Nav - BTS-100 Configuration

This page documents the public configuration context for using the Stars Nav BTS-100 with the Plaspy platform. It focuses on the practical server settings and the common steps integrators and end users follow so the BTS-100 can provide location and POI alerts for Plaspy workflows. The BTS-100 streams NMEA like position and telemetry over Bluetooth Serial Port Profile and manages POI files via the supplied PC utility and mini USB interface.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. Exact manufacturer configuration steps for the BTS-100 can vary by firmware, hardware revision, installation type, and vendor tools, so this guide emphasizes the Plaspy side values and a generic workflow while recommending you confirm device specific instructions with the official Stars Nav documentation.

## Configuration Overview

This configuration process prepares the BTS-100 to deliver its NMEA like Bluetooth SPP stream into a Plaspy enabled gateway or device that forwards data to the Plaspy server. The goal is to ensure the tracker feed is accepted by Plaspy and visible for mapping, alerts, and fleet reporting.

- Configure the BTS-100 and any gateway device so the GPS stream is routed to Plaspy.
- Enter Plaspy server settings on the forwarding device or gateway to point data to Plaspy.
- Validate connectivity so position updates appear in Plaspy maps and logs.
- Confirm POI and trace interval settings on the BTS-100 where relevant to match reporting needs.
- Save and test the configuration with a live position feed to verify visibility in Plaspy.

## Plaspy Server Settings

Use the following Plaspy server settings when configuring the gateway or forwarding device that will accept the BTS-100 Bluetooth SPP stream and forward it to Plaspy.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP depending on the forwarding device
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

Enter either the domain or the IP in the device or gateway configuration. Plaspy accepts UDP or TCP on port 8888 and will detect the protocol used by the tracker feed.

## Typical Requirements Before Setup

- A charged BTS-100 with Bluetooth SPP enabled and paired to the forwarding device or gateway
- A Plaspy account and a networked gateway, phone, or navigation unit that can forward GPS input to external servers
- Access to the official Stars Nav PC utility and a mini USB cable for POI updates and device settings when needed
- Reliable internet connectivity on the forwarding device so it can reach d.plaspy.com
- Knowledge of whether the forwarding device requires UDP or TCP selection for outbound tracking data
- Administrative access to any gateway or forwarding application to enter server and port settings

## How This Tracker Connects to Plaspy

The BTS-100 provides a continuous NMEA like location stream over Bluetooth SPP. A Plaspy enabled gateway or forwarding device reads that stream and sends it to the shared Plaspy server endpoint and port so Plaspy can process location, speed, and UTC information for mapping and alerts.

- The BTS-100 streams longitude, latitude, speed, and UTC over Bluetooth SPP to a forwarding device
- The forwarding device is configured to send that stream to d.plaspy.com or 54.85.159.138 on port 8888
- Forwarding can use UDP or TCP depending on device requirements and network conditions
- Plaspy automatically detects the tracker protocol and ingests the forwarded data for visualization and reporting
- Local POI alerts remain on the BTS-100 while Plaspy keeps historical telemetry and fleet level insights

## Common Configuration Workflow

1. Access the official Stars Nav configuration method or PC utility provided with the BTS-100.
2. Pair the BTS-100 to the forwarding device or gateway via Bluetooth SPP and confirm an active NMEA like stream.
3. In the forwarding device settings enter d.plaspy.com or 54.85.159.138 as the destination server.
4. Set the destination port to 8888 as Plaspy uses the same port for all supported devices.
5. Choose UDP or TCP on the forwarding device if a transport selection is required.
6. Apply or save the configuration and restart the forwarding application or device if required.
7. Validate that the device reports to Plaspy by checking for live position updates in your Plaspy account or dashboard.

## Example Configuration Commands

The BTS-100 configuration is typically handled through the Stars Nav PC utility and Bluetooth pairing rather than direct text commands. Exact commands or menu actions vary by firmware and the utility version. For this reason, follow the vendor utility prompts to set the device to stream via Bluetooth SPP and to upload POI files via mini USB. If you use a forwarding gateway that accepts textual commands, enter the Plaspy server domain or IP and port as described in the gateway documentation.

## Configuration Notes

- Firmware versions and PC utility revisions can change menu layouts and setting names; always check the version of your Stars Nav utility.
- POI upload and device settings are performed over mini USB with the supplied PC tool; maintain backups of POI files before changes.
- Choose UDP or TCP based on the forwarding device and network reliability; TCP can be more reliable over unstable links while UDP is lighter weight.
- Plaspy uses the same port 8888 for all supported devices and will auto detect the tracker protocol for incoming streams.
- Verify any transport or forwarding specifics in the Stars Nav documentation if the forwarding device requires special formatting or encapsulation.

## Why Use Plaspy with This Configuration

Using the BTS-100 with Plaspy provides a simple path to integrate a reliable Bluetooth SPP GPS source into centralized fleet monitoring and reporting. The BTS-100’s continuous NMEA like stream, configurable trace intervals, and local POI alerts make it well suited for fleets and drivers who need both in cab warnings and centralized visibility through Plaspy.

To learn more about Plaspy and how it can use BTS-100 telemetry for mapping, alerts, and reporting visit https://www.plaspy.com. Please verify the latest device specific setup details, firmware behavior, and manufacturer instructions on the Stars Nav site at http://www.starsnav.com/ since manufacturer methods and firmware can change over time.
