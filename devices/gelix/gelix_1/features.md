---
slug: /gelix/gelix_1/features
id: gelix_1-features
sidebar_label: Features
title: Gelix - Gelix 1 Features
sidebar_class_name: menu_item_tracker
description: Public feature summary of the Gelix 1 passive GPS data logger and how it integrates with Plaspy for depot and manual data retrieval
keywords:
  - Gelix Gelix 1 features
  - Gelix 1 GPS tracker
  - Gelix data logger
  - Gelix Plaspy compatibility
  - passive GPS tracker
  - vehicle data logger
  - Bluetooth data retrieval
  - IrDA data retrieval
  - fleet tracking Gelix
  - depot data upload
---

# Gelix - Gelix 1 Features

This page provides a public, non sensitive overview of the Gelix 1 GPS tracker features and how those features are used with Plaspy. It explains the practical capabilities of the Gelix 1 as a passive monitoring data logger and the main ways recorded navigation and event data can be retrieved and processed when using Plaspy.

Exact feature availability can vary by firmware version, hardware revision, installation type, and manufacturer implementation. Use this page for general guidance about capabilities and operational patterns, and consult the official Gelix documentation for the most current device specifics.

## Feature Overview

The Gelix 1 is a passive monitoring GPS data logger designed to record navigation and event data during vehicle motion or in response to external events. Its design focuses on recording and later retrieval rather than continuous live tracking, making it useful where batch uploads and depot-based data collection are preferred.

- Passive GPS data logging of navigation and event records for later retrieval
- Automatic data offload when vehicle returns to a depot or garage with a local radio access point such as Bluetooth or RF
- Flexible manual retrieval options using wired connection, IrDA, or Bluetooth with a PDA
- Ability to remove the unit for direct connection to a PC for detailed data download and analysis

## Core Features of Gelix - Gelix 1

- Passive recording of position and event information while the vehicle is active
- Triggered logging based on movement or external events documented by the device
- Automatic batch data retrieval via depot radio access points including Bluetooth or RF
- Manual data download over wired link, IrDA, or Bluetooth using a PDA or similar device
- Removable unit design that allows connection to a PC for manual import and deeper review
- Designed for scenarios where periodic or depot based data collection is preferred
- Compatible with Plaspy for ingestion and historical review of collected logs

## How These Features Work with Plaspy

Gelix 1 recorded logs can be imported into Plaspy for centralized storage and historical review. Because the Gelix 1 operates as a passive logger, uploads are typically received in batches rather than as a continuous stream, and Plaspy can organize that incoming data into vehicle histories and event timelines.

- Batch uploads from depot radio access points are processed into Plaspy as historical trips and events
- Manual imports from PC or PDA downloads can be added to a vehicle record in Plaspy for analysis
- Plaspy recognizes compatible tracker inputs and integrates recorded navigation and event data into its vehicle timelines
- Recorded events become part of each vehicle's history for later review and reporting
- Data retrieved from the device can be used in Plaspy to generate route summaries and operational reports

## Typical Use Cases

- Fleet operators that collect route and event logs when vehicles return to base
- Organizations that prefer periodic data collection rather than continuous live tracking
- Situations where local radio access points enable automated offload at the depot
- Field operations that use PDA or PC downloads for manual data transfer and analysis
- Research and operational optimization projects that analyze recorded navigation data

## Feature Availability Notes

- Feature set and behavior depend on the Gelix 1 firmware version and hardware revision
- Availability of automatic depot offload requires an installed radio access point and compatible infrastructure
- Retrieval interfaces such as IrDA, wired link, and Bluetooth depend on the device build and connector options
- Regional variants or manufacturer revisions can change supported retrieval methods and event handling
- Always check the device serial documentation and firmware release notes for precise behavior

## Why Use Plaspy with These Features

Using Plaspy with the Gelix 1 centralizes recorded navigation and event data so organizations can review historical activity, build operational reports, and maintain an archive of trips and events. Plaspy's ingestion of batch and manual uploads makes it straightforward to correlate depot uploads and PC imports with vehicle identities and timelines, providing a consistent place to review collected logs.

To learn more about how Plaspy can work with the Gelix 1, visit https://www.plaspy.com. For the latest device specific feature details, firmware behavior, and manufacturer documentation please verify information at the Gelix website http://www.gelix.com/ as device capabilities and implementations can change over time.
