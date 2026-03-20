---
slug: /lk_gps/lk970a_b_c/configuration
id: lk970a_b_c-configuration
sidebar_label: Configuration
title: LK-GPS - LK970A/B/C Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for LK GPS LK970A B C to connect with Plaspy using shared server settings and practical setup steps
keywords:
  - LK GPS LK970A configuration
  - LK GPS LK970B configuration
  - LK GPS LK970C configuration
  - LK970 setup for Plaspy
  - Plaspy tracker configuration
  - GPS tracker server configuration
  - vehicle tracking platform setup
  - LK GPS magnet tracker setup
  - LK970 Plaspy integration
  - GPS asset tracker configuration
---

# LK-GPS - LK970A/B/C Configuration

This page covers the public configuration context for using the LK-GPS LK970A/B/C tracker with Plaspy. It summarizes the practical server settings and setup workflow that operators and installers commonly use to bring the LK970 series online with Plaspy for real time tracking, alerts, and history playback. The guidance below is focused on the public integration points and the common tasks required to point the device to Plaspy.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools. Use this guide to prepare the device for Plaspy and validate connectivity, and consult the official LK GPS documentation or vendor tools for model specific instructions.

## Configuration Overview

The goal of this configuration process is to prepare the LK970A/B/C to reliably transmit GPS and event data to Plaspy so the device appears and remains visible on the platform. The steps below emphasize the public connection settings and the practical checks that confirm the tracker is reporting to Plaspy.

- Point the tracker to Plaspy server settings so telemetry and alerts are delivered to the Plaspy platform.
- Verify cellular connectivity, battery charge, and any required SIM provisioning before attempting server configuration.
- Save and apply the server and port settings using the manufacturer configuration tool or SMS method supplied by LK GPS.
- Select UDP or TCP transport if the device requires an explicit choice and restart the tracker as required.
- Confirm the device registers with the Plaspy server and appears in the Plaspy dashboard for live tracking and history playback.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and all devices in Plaspy use the same port

## Typical Requirements Before Setup

- Ensure the tracker has a charged battery installed or is powered according to installer instructions.
- Install a valid cellular SIM card and confirm it has an active data plan if the tracker requires cellular connectivity for 4G GPS streaming.
- Have access to the LK GPS official configuration method or software provided by the vendor for this model.
- Obtain the device IMEI and any authentication identifiers required by your Plaspy account or deployment workflow.
- Confirm regional compatibility such as supported LTE bands with the vendor if deploying across different countries or carriers.
- A simple test plan for verifying GPS fix and server connectivity after configuration.

## How This Tracker Connects to Plaspy

When configured for Plaspy, the LK970A/B/C sends location and event packets to the shared Plaspy server endpoint and port so Plaspy can ingest telemetry, alerts, and status updates. Plaspy uses a single port for all supported devices and detects the protocol automatically, allowing the platform to receive data from many tracker models with consistent server settings.

- The tracker transmits GPS position and device events to d.plaspy.com or the provided server IP.
- Traffic is sent to port 8888 using either UDP or TCP depending on the tracker settings and installer choice.
- Plaspy receives and parses the tracker packets and presents location, status, and alerts in the platform.
- Offline cached locations and queued events are uploaded to Plaspy when connectivity is restored.
- Successful configuration results in the device appearing on Plaspy for live tracking and historical trace review.

## Common Configuration Workflow

1. Power the device and insert a provisioned cellular SIM if required by the tracker variant.
2. Access the official manufacturer configuration method or software for the LK970A/B/C provided by LK GPS or your vendor.
3. In the device server settings, enter d.plaspy.com or alternatively use the Plaspy server IP 54.85.159.138.
4. Set the device port to 8888 as required by Plaspy.
5. Choose UDP or TCP transport if the device requires explicit transport selection.
6. Apply or save the configuration in the manufacturer's tool and, if recommended, restart the device to activate the new settings.
7. Validate that the tracker reports to Plaspy by checking device appearance and telemetry in the Plaspy platform.

## Example Configuration Commands

The exact commands and configuration interface vary by LK GPS firmware and the vendor configuration tool. Many LK GPS devices are configured either with a vendor desktop utility, a mobile app, or SMS command strings supplied by the manufacturer. Because firmware and vendor tools differ, follow the official LK GPS configuration method for this model to set server d.plaspy.com (or 54.85.159.138) and port 8888 and to choose UDP or TCP where applicable.

If you have specific SMS command strings or manufacturer console commands provided by LK GPS or your reseller, apply them in the order recommended by the vendor and verify each step using device feedback or Plaspy connection logs.

## Configuration Notes

- Firmware differences and hardware revisions can change available menu options and the format of configuration commands; always check the vendor release notes.
- If the tracker supports both UDP and TCP, test the preferred transport for your network environment; Plaspy accepts both on port 8888 and will detect the protocol automatically on receipt.
- Keep a record of the device IMEI and any credentials required for device provisioning in Plaspy to simplify onboarding.
- For deployments spanning regions, confirm LTE band support and carrier compatibility with LK GPS or your supplier.
- If the device supports SMS setup, ensure the sending phone number or SIM has SMS capability enabled and that commands use the manufacturer documented syntax.

## Why Use Plaspy with This Configuration

Using the LK970A/B/C with Plaspy enables organizations to centralize real time location and event data for fleets and high value assets. The LK970 family provides long autonomy and a covert form factor that, when pointed to Plaspy using the shared server settings, supports continuous visibility, alerting, and history playback required for operational monitoring and incident response.

To learn more about Plaspy visit https://www.plaspy.com and review the latest LK GPS device details at https://www.lk-gps.com to verify current manufacturer instructions and firmware behavior. Manufacturer specifications and setup methods can change over time so confirm device specific configuration details with the official LK GPS documentation before large scale deployment.
